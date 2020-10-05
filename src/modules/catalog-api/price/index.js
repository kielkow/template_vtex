const axios = require('axios');

class Price {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    updatePrice(id, body) {
        const price = axios.put(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
                body
            }
        );

        return price;
    }

    getPrice(id) {
        const price = axios.post(
            `https://api.vtex.com/${this.credentials.accountName}/pricing/prices/${id}`,
            {
                headers: this.credentials,
            }
        );

        return price;
    }
}

export default Price;