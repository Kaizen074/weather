const handler = require('../../modules/bluetooth');

const bluetooth = async (req, res) => {
    let data = await handler();
    return res.send(data);
};
module.exports = bluetooth;