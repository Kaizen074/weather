const handler = require('../../modules/network');

const network = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'defaultinterface':
            data = await handler.defaultinterface();
            return res.send(data);
        case 'defaultgateway':
            data = await handler.defaultgateway();
            return res.send(data);
        case 'interfaces':
            data = await handler.interfaces();
            return res.send(data);
        case 'stats':
            data = await handler.usage();
            return res.send(data);
        case 'connections':
            data = await handler.connections();
            return res.send(data);
        case 'urlping':
            if (req.query.url){
                data = await handler.urlping(req.query.url);
            } else {
                data = {error: "You must specify an URL on URL query parameters."};
            }
            return res.send(data);
        case 'hostping':
            if (req.query.ip){
                data = await handler.hostping(req.query.ip);
            } else {
                data = {error: "You must specify an  internal IP on URL query parameters."};
            }
            return res.send(data);
        default:
            return res.send({error: "Function error, please try 'defaultinterface', 'defaultgateway', 'interfaces', 'stats', 'connections', 'urlping', 'hostping' on URL query parameters."})
    }
}

module.exports = network;