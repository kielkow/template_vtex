const axios = require('axios');

class Brand {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async list() {
        const brands = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/brand/list`,
            {
                headers: this.credentials
            }
        );

        return brands;
    }
}

module.exports = Brand;