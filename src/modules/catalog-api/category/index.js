const axios = require('axios');

class Category {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async getByLevels(categoryLevels = 1) {
        const category = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/${categoryLevels}`,
            {
                headers: this.credentials
            }
        );

        return category;
    }
}

module.exports = Category;