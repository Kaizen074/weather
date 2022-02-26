const handler = require('../../modules/execute');

const execute = async (req, res) => {
    let data;
    if (!!req.query.executable){
        data = await handler(req.query.executable, req.query.parameters);
    } else {
        data = {error: "Executable error, please add 'executable' and 'parameters' on URL query parameters."};
    }
    return res.send(data);
};

module.exports = execute;