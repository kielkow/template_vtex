const axios = require('axios');

class User {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async getOrders(params) {
        const userOrders = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/user/orders`,
            {
                headers: this.credentials,
                params
            }
        );

        return userOrders;
    }
}

module.exports =  User;