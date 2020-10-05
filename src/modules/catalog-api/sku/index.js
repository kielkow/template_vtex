const axios = require('axios');

class Sku {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    getByRefId(refId) {
        const sku = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/${refId}`,
            {
                headers: this.credentials,
            }
        );

        return sku;
    }

    getById(id) {
        const sku = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/${id}`,
            {
                headers: this.credentials,
            }
        );

        return sku;
    }

    listAllSkusIds(page, pagesize) {
        const skusIds = axios.get(
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

export default Sku;