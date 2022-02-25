const handler = require('../../modules/gpu');

const gpu = async (req, res) => {
    let data = await handler();
    return res.send(data);
};
module.exports = gpu;