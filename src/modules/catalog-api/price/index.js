const axios = require('axios');
class Price {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async createOrUpdate(id, body) {
        const price = await axios.put(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
                body
            }
        );

        return price;
    }

    async get(id) {
        const price = await axios.get(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
            }
        );

        return price;
    }
}

module.exports = Price;