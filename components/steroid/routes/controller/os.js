const handler = require('../../modules/os');

const os = async (req, res) => {
    let data = await handler();
    return res.send(data);
};

module.exports = os;