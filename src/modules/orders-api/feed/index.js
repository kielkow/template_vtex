class Feed {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    create(body) {
        const feed = axios.get(
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
}

export default new Feed();