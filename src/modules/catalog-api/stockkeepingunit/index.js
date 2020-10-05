const axios = require('axios');

class StockKeepingUnit {
    constructor(accountName, apiKey, appToken) {
        this.credentials = {
            accountName,
            'x-vtex-api-apikey': apiKey,
            'x-vtex-api-apptoken': appToken
        }
    }

    createSku(body) {
        const stockKeepingUnit = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit`,
            {
                headers: this.credentials, 
                body
            }
        );

        return stockKeepingUnit;
    }

    getSkus(params) {
        const stockKeepingUnit = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    createSkuFile(skuId, body) {
        const stockKeepingUnit = axios.post(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/file`,
            {
                headers: this.credentials, 
                body
            }
        );

        return stockKeepingUnit;
    }

    getSkuFiles(skuId, params) {
        const stockKeepingUnit = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/file`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    getEANBySkuId(skuId) {
        const stockKeepingUnit = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/ean`,
            {
                headers: this.credentials,
                params 
            }
        );

        return stockKeepingUnit;
    }

    createEAN(skuId, ean) {
        const stockKeepingUnit = axios.get(
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit/${skuId}/ean/${ean}`,
            {
                headers: this.credentials
            }
        );

        return stockKeepingUnit;
    }


}

export default StockKeepingUnit;