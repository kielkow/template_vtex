const axios = require('axios');

class Hook {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async createOrUpdate(body) {
        const hook = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/hook/config`,
            {
                headers: this.credentials,
                body
            }
        );

        return hook;
    }

    async delete() {
        const hook = await axios.delete(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/orders/hook/config`,
            {
                headers: this.credentials
            }
        );

        return hook;
    }
}

module.exports = Hook;