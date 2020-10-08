const { createDecipher } = require('crypto');

module.exports = async (obj, fields) => {
    const decrypt = (async obj => {
        for (const prop in obj) {
            if (Array.isArray(obj[prop]) || typeof obj[prop] === 'object') await decrypt(obj[prop]);

            if (obj[prop] === null || obj[prop] === '' || obj[prop] === undefined) continue;

            const decipher = createDecipher('aes256', 'encryptobjectfields');

            if (fields.includes(prop)) obj[prop] = decipher.update(obj[prop], 'hex', 'utf8') + decipher.final('utf8');
        }

        return obj;
    });

    const decrypted = await decrypt(JSON.parse(JSON.stringify(obj)));

    return decrypted;
};