const Feed = require('../feed');
const Hook = require('../hook');

class Order {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }

        this.Feed = new Feed();
        this.Hook = new Hook();
    }
}

module.exports = Order;