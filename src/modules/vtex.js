const Product = require('./catalog-api/product');
const Sku = require('./catalog-api/sku');
const Category = require('./catalog-api/category');
const Inventory = require('./catalog-api/inventory');
const Brand = require('./catalog-api/brand');
const Price = require('./catalog-api/price');
const StockKeepingUnit = require('./catalog-api/stockkeepingunit');
const User = require('./orders-api/user');
const Order = require('./orders-api/order');
class Vtex {
    constructor(accountName, appKey, appToken) {
        this.Product = new Product(accountName, appKey, appToken);
        this.Sku = new Sku(accountName, appKey, appToken);
        this.Category = new Category(accountName, appKey, appToken);
        this.Inventory = new Inventory(accountName, appKey, appToken);
        this.Brand = new Brand(accountName, appKey, appToken);
        this.Price = new Price(accountName, appKey, appToken);
        this.StockKeepingUnit = new StockKeepingUnit(accountName, appKey, appToken);
        this.User = new User(accountName, appKey, appToken);
        this.Order = new Order(accountName, appKey, appToken);
    }
}

module.exports =  Vtex;
