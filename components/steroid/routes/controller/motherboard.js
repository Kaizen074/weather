const handler = require('../../modules/motherboard');

const motherboard = async (req, res) => {
    let data;
    data = await handler.baseboard();
    return res.send(data);
};

module.exports = motherboard;