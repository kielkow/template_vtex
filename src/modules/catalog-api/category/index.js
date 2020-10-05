const axios = require('axios');

class Category {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    getByLevels(categoryLevels = 1) {
        const category = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/${categoryLevels}`,
            {
                headers: this.credentials
            }
        );

        return category;
    }
}

module.exports =  Category;