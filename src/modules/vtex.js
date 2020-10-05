const Product = require('./catalog-api/product');
const Sku = require('./catalog-api/sku');

class Vtex {
    constructor(accountName, apiKey, appToken) {
        this.Product = new Product({ accountName, apiKey, appToken });
        this.Sku = new Sku({ accountName, apiKey, appToken })
    }
}

export default Vtex;
