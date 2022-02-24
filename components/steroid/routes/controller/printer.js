const handler = require('../../modules/printer');

const printer = async (req, res) => {
    let data = await handler.info();
    return res.send(data);
};

module.exports = printer;