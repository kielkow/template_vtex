class Feed {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    create(body) {
        const feed = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed`,
            {
                headers: this.credentials,
                body
            }
        );

        return feed;
    }

    get(maxlot) {
        const feed = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed`,
            {
                headers: this.credentials,
                params: {
                    maxlot
                }
            }
        );

        return feed;
    }

    updateConfig(body) {
        const feed = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials,
                body
            }
        );

        return feed;
    }

    getConfig() {
        const feed = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials
            }
        );

        return feed;
    }

    deleteConfig() {
        const feed = axios.delete(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials
            }
        );

        return feed;
    }
}

export default new Feed();