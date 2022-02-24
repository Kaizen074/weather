const handler = require('../../modules/system');

const system = async (req, res) => {
    let general;
    switch(req.query.function){
        case 'time':
            general = await handler.time();
            return res.send(general);
        case 'os':
            general = await handler.osInfo();
            return res.send(general);
        case 'uuid':
            general = await handler.uuid();
            return res.send(general);
        case 'users':
            general = await handler.users();
            return res.send(general);
        case 'processes':
            general = await handler.processes();
            return res.send(general);
        case 'processload':
            general = await handler.processLoad("*");
            return res.send(general);
        case 'services':
            general = await handler.services('*');
            return res.send(general);
        default:
            return res.send({error: "Function error, please try 'time', 'os', 'uuid', 'users', 'processes', 'processload', 'services' on URL query parameters."});
    }
};

module.exports = system;