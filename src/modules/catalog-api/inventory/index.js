const axios = require('axios');

class Inventory {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    updateSkuWarehouse(skuId, warehouseId, body) {
        const sku = axios.put(
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