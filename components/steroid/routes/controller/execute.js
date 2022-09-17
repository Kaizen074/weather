const handler = require('../../modules/execute');

const execute = async (req, res) => {
    let data;
    if (!!req.body.executable){
        data = await handler(req.body.executable, req.body.parameters);
    } else {
        data = {executed: false, error: "Executable error, please add 'executable: EXECUTABLE_PATH' and 'parameters: PARAMS' to your body request."};
    }
    return res.send(data);
};

module.exports = execute;