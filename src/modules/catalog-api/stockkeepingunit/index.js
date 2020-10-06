const axios = require('axios');

class StockKeepingUnit {
    constructor(accountName, appKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-appkey': appKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    async createSku(body) {
        const stockKeepingUnit = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit`,
            {
                headers: this.credentials, 
                body
            }
        );

        return stockKeepingUnit;
    }

    async getSkus(params) {
        const stockKeepingUnit = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    async createSkuFile(skuId, body) {
        const stockKeepingUnit = await axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/file`,
            {
                headers: this.credentials, 
                body
            }
        );

        return stockKeepingUnit;
    }

    async getSkuFiles(skuId, params) {
        const stockKeepingUnit = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/file`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    async getEANBySkuId(skuId) {
        const stockKeepingUnit = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/ean`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    async createEAN(skuId, ean) {
        const stockKeepingUnit = await axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/ean/${ean}`,
            {
                headers: this.credentials
            }
        );

        return stockKeepingUnit;
    }
}

module.exports = StockKeepingUnit;