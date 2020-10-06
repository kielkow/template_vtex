const axios = require('axios');

class Inventory {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async updateSkuWarehouse(skuId, warehouseId, body) {
        const sku = await axios.put(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/logistics/pvt/skus/${skuId}/warehouses/${warehouseId}`,
            {
                headers: this.credentials,
                body,
            }
        );

        return sku;
    }
}

module.exports =  Inventory;