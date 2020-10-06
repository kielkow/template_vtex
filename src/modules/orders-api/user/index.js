const axios = require('axios');

class User {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async getOrders(clientEmail, page, per_page) {
        const userOrders = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/oms/user/orders`,
            {
                headers: this.credentials,
                params: {
                    clientEmail, 
                    page, 
                    per_page
                }
            }
        );

        return userOrders;
    }
}

module.exports = User;