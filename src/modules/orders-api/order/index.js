const axios = require('axios');

const Invoice = require('../invoice');
const Feed = require('../feed');
const Hook = require('../hook');
const moment = require('moment');
const auxiliarFunction = require('./functions');

class Order {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }

        this.Invoice = new Invoice(accountName, appKey, appToken);
        this.Feed = new Feed(accountName, appKey, appToken);
        this.Hook = new Hook(accountName, appKey, appToken);
    }

    async getById(orderId) {
        const order = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    async lists(params) {
        const order = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders`,
            {
                headers: this.credentials,
                params
            }
        );

        return order;
    }

    async paginateLists(params, sleep = null) {
        let momentStart = moment();
        if (params.start) {
            let paramsStart = params.start;
            Object.keys(paramsStart).forEach(index => {
                if (index == 'date') {
                    momentStart = moment(paramsStart[index]);
                } else {
                    momentStart.subtract(paramsStart[index], index);
                }
            });
        }

        let momentEnd = moment();
        if (params.end) {
            let paramsEnd = params.end;
            Object.keys(paramsEnd).forEach(index => {
                if (index == 'date') {
                    momentEnd = moment(paramsEnd[index]);
                } else {
                    momentEnd.subtract(paramsEnd[index], index);
                }
            });
        }

        let endDate = new Date(momentEnd).toISOString();
        let startDate = new Date(momentStart).toISOString();

        if (startDate > endDate) {
            const auxiliarDate = startDate;
            startDate = endDate;
            endDate = auxiliarDate;
        }

        let queryStringObject = {
            f_creationDate: params.f_creationDate || `creationDate:[${startDate} TO ${endDate}]`,
            page: params.page || 1,
            per_page: params.per_page || 100,
            orderBy: "creationDate,asc"
        };

        let paramsQuery = ['f_status', 'q', 'incompleteOrders'];

        paramsQuery.forEach(query => {
            if (params[query]) {
                queryStringObject[query] = params[query];
            }
        });

        const orders = await auxiliarFunction.getAllOrders(this.credentials, queryStringObject, startDate, endDate, [], sleep);

        return orders;
    }


    async startHandling(orderId) {
        const order = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/start-handling`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    async cancel(orderId) {
        const order = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/cancel`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    async change(orderId, body) {
        const order = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/changes`,
            {
                headers: this.credentials,
                body
            }
        );

        return order;
    }
    
    async changeStatus(orderId, status) {
        const order = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/changestate/${status}`,
            {
                headers: this.credentials
            }
        );

        return order;
    }
}

module.exports = Order;