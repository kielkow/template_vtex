const axios = require('axios');

class Product {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async getById(id) {
        const product = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
            {
                headers: this.credentials
            }
        );

        return product;
    }

    async create(body) {
        const product = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/product`,
            {
                headers: this.credentials,
                body
            }
        );

        return product;
    }

    async getByRefId(refId) {
        const product = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/productgetbyrefid/${refId}`,
            {
                headers: this.credentials
            }
        );

        return product;
    }
}

module.exports =  Product;