const handler = require('../../modules/gpu');

const gpu = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'usage':
            data = await handler.usage();
            return res.send(data);
        case 'info':
            data = await handler.info();
            return res.send(data);
        default:
            return res.send({error: "Function error, please try '?function=usage', '?function=info' on URL query parameters."});
    }
};

module.exports = gpu;