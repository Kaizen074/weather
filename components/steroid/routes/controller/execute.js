const handler = require('../../modules/execute');

const execute = async (req, res) => {
    let data;
    if (!!req.body.executable){
        data = await handler(req.body.executable, req.body.parameters);
    } else {
        data = {error: "Executable error, please add '?executable=EXECUTABLE_PATH' and '?parameters=PARAMS' on URL query parameters."};
    }
    return res.send(data);
};

module.exports = execute;