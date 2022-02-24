const handler = require('../../modules/execute');

const execute = async (req, res) => {
    let data = await handler();
    return res.send(data);
};

module.exports = execute;