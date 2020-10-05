class Hook {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    createOrUpdate(body) {
        const hook = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/hook/config`,
            {
                headers: this.credentials,
                body
            }
        );

        return hook;
    }

    delete() {
        const hook = axios.delete(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/hook/config`,
            {
                headers: this.credentials
            }
        );

        return hook;
    }
}

module.exports =  new Hook();