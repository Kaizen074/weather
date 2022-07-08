const handler = require('../../modules/motherboard');

const motherboard = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'system':
            data = await handler.system();
           return  res.send(data);
        case 'bios':
            data = await handler.bios();
            return res.send(data);
        case 'baseboard':
            data = await handler.baseboard();
            return res.send(data);
        case 'chassis':
            data = await handler.chassis();
            return res.send(data);
        default:
            res.send({error: "Function error, please try '?function=system', '?function=bios', '?function=baseboard', '?function=chassis' on URL query parameters."})
            break;
    }
};

module.exports = motherboard;