const Feed = require('../feed');

class Order {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }

        this.Feed = new Feed();
    }
}

export default new Order();