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
            `https://${this.credentials.accountName}.vtexcommercestable.com.br/api/catalog/pvt/stockkeepingunit`,
            {
                headers: this.credentials,
                params: {
                    refId
                }
            }
        );

        return sku;
    }
}

export default Sku;