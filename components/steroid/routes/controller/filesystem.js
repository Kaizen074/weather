const handler = require('../../modules/filesystem');

const filesystem = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'usage': 
            data = await handler.usage();
            return res.send(data);
        case 'info':
            data = await handler.info();
            return res.send(data);
        case 'layout':
            data = await handler.layout();
            return res.send(data);
        case 'block':
            data = await handler.block();
            return res.send(data);
        default:
            res.send({error: "Function error, please try '?function=usage', '?function=info', '?function=layout', '?function=block'  on URL query parameters."})
            break;
    }
};

module.exports = filesystem;