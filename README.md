# Package util for work with VTEX API
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkielkow%2Ftemplate_vtex.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkielkow%2Ftemplate_vtex?ref=badge_shield)


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
 ┣ 📂Users  


# Catalog

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
//param [ require(refId) ]
const stockKeepingUnitGetSkus = await vtex.StockKeepingUnit.getSkus(refId);

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

# Orders

## Order

```js
//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId
//param [ require(orderId) ]
const orderGetById = await vtex.Order.getById(orderId);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders
//param [ require(params, example -> params = {f_creationDate: 'creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]'}) ]
const orderList = await vtex.Order.lists(params);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders
//param [ require(params, example -> params = {f_creationDate: 'creationDate:[2016-01-01T02:00:00.000Z TO 2021-01-01T01:59:59.999Z]'}), optional(sleep, milliseconds frozen application) ]
//Additional params, params = {"start": {"years": 1,"months": 3,"days": 5,"hours": 10,"minutes": 9,"seconds": 33,"date": "02/10/2020}, "end": {"years": 1,"months": 3,"days": 5,"hours": 10,"minutes": 9,"seconds": 33, "date": "02/10/2020}

const orderList = await vtex.Order.paginateLists(params, sleep);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/start-handling
//param [ require(orderId) ]
const orderStartHandling = await vtex.Order.startHandling(orderId);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/cancel
//param [ require(orderId) ]
const orderCancel = await vtex.Order.cancel(orderId);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/changes
//param [ require(orderId), require(body) ]
const orderChange = await vtex.Order.change(orderId, body);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/changestate/status
//param [ require(orderId), require(status) ]
const orderChangeStatus = await vtex.Order.changeStatus(orderId, status);
```


## Invoice

```js
//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/invoice
//param [ require(orderId), require(body) ]
const invoiceCreate = await vtex.Order.Invoice.create(orderId, body);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/invoice/invoiceNumber
//param [ require(orderId), require(invoiceNumber), require(body) ]
const invoicePartial = await vtex.Order.Invoice.partial(orderId, invoiceNumber, body);

//https://{accountName}.{environment}.com.br/api/oms/pvt/orders/orderId/invoice/invoiceNumber/tracking
//param [ require(orderId) ]
const invoiceTracking = await vtex.Order.Invoice.updateTracking(orderId, invoiceNumber, body);
```


## Feed

```js
//https://{accountName}.{environment}.com.br/api/orders/feed
//param [ require(body) ]
const feedCreate = await vtex.Order.Feed.create(body);

//https://{accountName}.{environment}.com.br/api/orders/feed
//param [ require(maxlot) ]
const feedGet = await vtex.Order.Feed.get(maxlot);

//https://{accountName}.{environment}.com.br/api/orders/feed/config
//param [ require(body) ]
const feedUpdateConfig = await vtex.Order.Feed.updateConfig(body);

//https://{accountName}.{environment}.com.br/api/orders/feed/config
const feedGetConfig = await vtex.Order.Feed.getConfig();
```


## Hook

```js
//https://{accountName}.{environment}.com.br/api/orders/hook/config
//param [ require(body) ]
const hookCreateOrUpdate = await vtex.Order.Hook.createOrUpdate(body);

//https://{accountName}.{environment}.com.br/api/orders/hook/config
const hookDelete = await vtex.Order.Hook.delete();
```


## Users

```js
//https://{accountName}.{environment}.com.br/api/oms/user/orders
//param [ require(clientEmail), require(page), require(per_page) ]
const userGetOrders = await vtex.User.getOrders(clientEmail, page, per_page);
```

## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fkielkow%2Ftemplate_vtex.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fkielkow%2Ftemplate_vtex?ref=badge_large)