const handler = require('../../modules/motherboard');

const motherboard = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'system':
            data = await handler.system();
           return  res.send(data);
        case 'bios':
            data = await handler.bios(); //module.bios
            return res.send(data);
        case 'baseboard':
            data = await handler.baseboard(); //module.baseboard
            return res.send(data);
        case 'chassis':
            data = await handler.chassis(); // module.chassis
            return res.send(data);
        default:
            res.send({error: "Function error, please try 'system', 'bios', 'baseboard', 'chassis' on URL query parameters."})
            break;
    }
};

module.exports = motherboard;