const handler = require('../../modules/memory');

const memory = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'usage':
            data = await handler.usage();
            return res.send(data);
        case 'layout':
            data = await handler.layout();
            return res.send(data);
        default:
            return res.send({error: "Function error, please try 'usage', 'layout' on URL query parameters."})
    }
};

module.exports = memory;