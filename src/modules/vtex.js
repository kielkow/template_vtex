const Product = require('./catalog-api/product');
const Sku = require('./catalog-api/sku');
const Category = require('./catalog-api/category');
const Inventory = require('./catalog-api/inventory');
const Brand = require('./catalog-api/brand');
const Price = require('./catalog-api/price');

class Vtex {
    constructor(accountName, apiKey, appToken) {
        this.Product = new Product({ accountName, apiKey, appToken });
        this.Sku = new Sku({ accountName, apiKey, appToken });
        this.Category = new Category({ accountName, apiKey, appToken });
        this.Inventory = new Inventory({ accountName, apiKey, appToken });
        this.Brand = new Brand({ accountName, apiKey, appToken });
        this.Price = new Price({ accountName, apiKey, appToken });
    }
}

export default Vtex;
