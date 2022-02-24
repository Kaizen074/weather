const handler = require('../../modules/cpu');

const cpu = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'usage':
            data = await handler.usage();
            return res.send(data);
        case 'detailedusage':
            data = await handler.detailed();
            return res.send(data);
        case 'info':
            data = await handler.info();
            return res.send(data);
        case 'temperature':
            data = await handler.temperature();
            return res.send(data);
        default:
            return res.send({error: "Function error, please try 'usage', 'detailedusage', 'info', 'temperature' on URL query parameters."});
    }
}
module.exports = cpu;