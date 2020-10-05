const Feed = require('../feed');
const Hook = require('../hook');

class Order {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }

        this.Feed = new Feed();
        this.Hook = new Hook();
    }

    getById(orderId) {
        const order = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    lists(params) {
        const order = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders`,
            {
                headers: this.credentials,
                params
            }
        );

        return order;
    }


    startHandling(orderId) {
        const order = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/start-handling`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    cancel(orderId) {
        const order = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/cancel`,
            {
                headers: this.credentials
            }
        );

        return order;
    }

    change(orderId, body) {
        const order = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/changes`,
            {
                headers: this.credentials,
                body
            }
        );

        return order;
    }
    
    changeStatus(orderId, status) {
        const order = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/changestate/${status}`,
            {
                headers: this.credentials
            }
        );

        return order;
    }


}

module.exports = Order;