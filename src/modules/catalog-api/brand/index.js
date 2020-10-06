const axios = require('axios');

class Brand {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async listBrands() {
        const brands = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/brand/list`,
            {
                headers: this.credentials
            }
        );

        return brands;
    }
}

module.exports =  Brand;