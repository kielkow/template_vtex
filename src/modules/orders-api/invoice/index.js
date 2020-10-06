class Invoice {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async create(orderId, body) {
        const invoice = await axios.put(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/invoice`,
            {
                headers: this.credentials,
                body
            }
        );

        return invoice;
    }

    async updateTracking(orderId, invoiceNumber, body) {
        const invoice = await axios.put(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/invoice/${invoiceNumber}/tracking`,
            {
                headers: this.credentials,
                body
            }
        );

        return invoice;
    }

    async partial(orderId, invoiceNumber, body) {
        const invoice = await axios.patch(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/invoice/${invoiceNumber}`,
            {
                headers: this.credentials,
                body
            }
        );

        return invoice;
    }
}

module.exports = Invoice;