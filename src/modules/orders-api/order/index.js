const Feed = require('../feed');
const Hook = require('../hook');

class Order {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }

        this.Feed = new Feed();
        this.Hook = new Hook();
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