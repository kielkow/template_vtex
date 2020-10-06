# Package util for work with VTEX API

How to use?

installing:
```shell
npm i template-vtex
```

coding:
```js
const template_vtex = require('template-vtex');

async function test() {
    const vtex = new template_vtex(
        'accountName', 
        'appKey',
        'appToken'
    );

    const order = await vtex.Order.getById('1066170087745-01');

    console.log(order);
}

test();
```

# Methods

📦vtex
 ┣ 📂Brand
 ┣ 📂Category
 ┣ 📂Inventory
 ┣ 📂Price
 ┣ 📂Product
 ┣ 📂Sku
 ┣ 📂StockKeepingUnit
 ┣ 📂Order
 ┃ ┗ 📂Invoice
 ┃ ┗ 📂Feed
 ┃ ┗ 📂Hook


# Signature methods
### Brand

```js
//https://{accountName}.{environment}.com.br/api/catalog_system/pvt/brand/list
const brand = await vtex.Brand.list();
```

### Category

```js
//https://{accountName}.{environment}.com.br/api/catalog_system/pub/category/tree/categoryLevels
//param [ optional(categoryLevels, default categoryLevels=1) ]
const category = await vtex.Category.getByLevels(categoryLevels);
```

### Inventory

```js
//https://{accountName}.{environment}.com.br/api/logistics/pvt/inventory/skus/skuId/warehouses/warehouseId
//param [ require(skuId), require(warehouseId), require(body) ]
const inventory = await vtex.Inventory.updateSkuWarehouse(skuId, warehouseId, body);
```

### Price

```js
//https://api.vtex.com/{accountName}/pricing/prices/itemId
//param [ require(itemId), require(body) ]
const priceCreateOrUpdate = await vtex.Price.createOrUpdate(itemId, body);

//https://api.vtex.com/{accountName}/pricing/prices/itemId
//param [ require(itemId) ]
const priceGet = await vtex.Price.get(itemId);
```


### Product

```js
//https://{accountName}.{environment}.com.br/api/catalog/pvt/product/productId
//param [ require(productId) ]
const productGetById = await vtex.Product.getById(productId);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/product
//param [ require(body) ]
const productCreate = await vtex.Product.create(body);

//https://{accountName}.{environment}.com.br/api/catalog_system/pvt/products/productgetbyrefid/refId
//param [ require(refId) ]
const productGetByRefId = await vtex.Product.getByRefId(refId);
```


### Sku

```js
//https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/refId
//param [ require(refId) ]
const skuGetByRefId = await vtex.Sku.getByRefId(refId);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId
//param [ require(skuId) ]
const skuGetById = await vtex.Sku.getById(skuId);

//https://{accountName}.{environment}.com.br/api/catalog_system/pvt/sku/stockkeepingunitids
//param [ require(page), require(pagesize) ]
const skuListAllIds = await vtex.Sku.listAllIds(page, pagesize);
```


### StockKeepingUnit

```js
//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit
//param [ require(body) ]
const stockKeepingUnitCreateSku = await vtex.StockKeepingUnit.createSku(body);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit
//param [ optional(params, example -> const params = {refId: 20}) ]
const stockKeepingUnitGetSkus = await vtex.StockKeepingUnit.getSkus(params);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId/file
//param [ require(skuId), require(body) ]
const stockKeepingUnitCreateSkuFile = await vtex.StockKeepingUnit.createSkuFile(skuId, body);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId/file
//param [ require(skuId) ]
const stockKeepingUnitGetSkuFile = await vtex.StockKeepingUnit.getSkuFiles(skuId);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId/ean
//param [ require(skuId) ]
const stockKeepingUnitGetEANBySkuId = await vtex.StockKeepingUnit.getEANBySkuId(skuId);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId/ean
//param [ require(skuId) ]
const stockKeepingUnitGetEANBySkuId = await vtex.StockKeepingUnit.getEANBySkuId(skuId);

//https://{accountName}.{environment}.com.br/api/catalog/pvt/stockkeepingunit/skuId/ean
//param [ require(skuId), require(ean) ]
const stockKeepingUnitCreateEAN = await vtex.StockKeepingUnit.createEAN(skuId, ean);
```