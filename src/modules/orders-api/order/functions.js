const axios = require('axios');
const moment = require('moment');
const sleep = require('../../../utils/sleep');

async function getAllOrders (credential, queryStringObject, startDate, endDate, orders = [], time = null) {
    let urlBaseOrderList = `https://${credential.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders`;
    let queryString = Object.keys(queryStringObject).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryStringObject[key])}`).join('&');
    let url = `${urlBaseOrderList}?${queryString}`;

    let responseOrders = await axios.get(
        url,
        {
            headers: credential
        }
    );
    
    let orderList = responseOrders.data.list;

    if (orderList.length != 0) {
        orders = orders.concat(orderList);
        let pages = responseOrders.data.paging.pages;

        let orderLastDateCreation = null;

        if (pages > 1) {

            for (let page = queryStringObject.page + 1; page <= pages; page++) {

                if (page > 30) {
                    startDate = moment(orderLastDateCreation).add(1, 'millisecond').toISOString();
                    queryStringObject.page = 1;
                    queryStringObject.f_creationDate = `creationDate:[${startDate} TO ${endDate}]`;
                    orders = await getAllOrders(credential, queryStringObject, startDate, endDate, orders);
                    break;
                }

                queryStringObject.page = page;
                queryString = Object.keys(queryStringObject).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(queryStringObject[key])}`).join('&');
                url = `${urlBaseOrderList}?${queryString}`;

                responseOrders = await axios.get(
                    url,
                    {
                        headers: credential
                    }
                );
                
                if (time) {
                    await sleep(time);
                }

                if (responseOrders.data.list.length != 0) {
                    orders = orders.concat(responseOrders.data.list);
                    let order = responseOrders.data.list.pop();
                    orderLastDateCreation = order.creationDate;
                }

            }
        }
    }

    return orders;
}
module.exports = {
    getAllOrders
};