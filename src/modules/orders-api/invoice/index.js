class Invoice {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    create(orderId, body) {
        const invoice = axios.put(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/invoice`,
            {
                headers: this.credentials,
                body
            }
        );

        return invoice;
    }

    updateTracking(orderId, invoiceNumber, body) {
        const invoice = axios.put(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}/invoice/${invoiceNumber}/tracking`,
            {
                headers: this.credentials,
                body
            }
        );

        return invoice;
    }

    partial(orderId, invoiceNumber, body) {
        const invoice = axios.patch(
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