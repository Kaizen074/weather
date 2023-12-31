const handler = require('../../modules/system');

const system = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'uptime':
            data = await handler.time();
            return res.send(data);
        case 'os':
            data = await handler.os();
            return res.send(data);
        case 'uuid':
            data = await handler.uuid();
            return res.send(data);
        case 'users':
            data = await handler.users();
            return res.send(data);
        case 'display':
            data = await handler.display();
            return res.send(data);
        case 'processes':
            data = await handler.processes();
            return res.send(data);
        case 'processload':
            data = await handler.processload("*");
            return res.send(data);
        case 'services':
            data = await handler.services('*');
            return res.send(data);
        default:
            return res.send({error: "Function error, please try '?function=time', '?function=os', '?function=uuid', '?function=users', '?function=display', '?function=processes', '?function=processload', '?function=services' on URL query parameters."});
    }
};

module.exports = system;