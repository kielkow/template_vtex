const axios = require('axios');

class Sku {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async getByRefId(refId) {
        const sku = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`,
            {
                headers: this.credentials,
            }
        );

        return sku;
    }

    async getById(id) {
        const sku = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/${id}`,
            {
                headers: this.credentials,
            }
        );

        return sku;
    }

    async listAllSkusIds(page, pagesize) {
        const skusIds = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitids`,
            {
                headers: this.credentials,
                params: {
                    page,
                    pagesize
                }
            }
        );

        return skusIds;
    }
}

module.exports =  Sku;