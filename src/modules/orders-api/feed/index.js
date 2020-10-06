class Feed {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async create(body) {
        const feed = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed`,
            {
                headers: this.credentials,
                body
            }
        );

        return feed;
    }

    async get(maxlot) {
        const feed = await axios.get(
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

    async updateConfig(body) {
        const feed = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials,
                body
            }
        );

        return feed;
    }

    async getConfig() {
        const feed = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials
            }
        );

        return feed;
    }

    async deleteConfig() {
        const feed = await axios.delete(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/feed/config`,
            {
                headers: this.credentials
            }
        );

        return feed;
    }
}

module.exports =  new Feed();