const handler = require('../../modules/execute');

const execute = async (req, res) => {
    let data = await handler(req.query.executable, req.query.parameters);
    return res.send(data);
};
module.exports = execute;