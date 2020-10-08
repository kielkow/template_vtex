
const { createCipher } = require('crypto');

module.exports = async (obj, fields) => {
    const crypt = (async obj => {
        for (const prop in obj) {
            if (Array.isArray(obj[prop]) || typeof obj[prop] === 'object') await crypt(obj[prop]);

            if (obj[prop] === null || obj[prop] === '' || obj[prop] === undefined) continue;

            const cipher = createCipher('aes256', 'encryptobjectfields');

            if (fields.includes(prop)) obj[prop] = cipher.update(obj[prop], 'utf8', 'hex') + cipher.final('hex');
        }

        return obj;
    });

    const encrypted = await crypt(JSON.parse(JSON.stringify(obj)));

    return encrypted;
};