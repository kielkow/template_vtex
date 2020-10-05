const axios = require('axios');

class Product {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    getById(id) {
        const product = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/product/${id}`,
            {
                headers: this.credentials
            }
        );

        return product;
    }

    create(body) {
        const product = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/product`,
            {
                headers: this.credentials,
                body
            }
        );

        return product;
    }
}

export default Product;