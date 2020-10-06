# Package util for work with VTEX API

How to use?

installing:
```shell
npm i template-vtex
```

coding:
```js
const template_vtex = require('./src');

async function test() {
    const vtex = new template_vtex(
        'accountName', 
        'appKey',
        'appToken'
    )

    const order = await vtex.Order.getById('1066170087745-01')
    console.log(order);
}

test();
```

