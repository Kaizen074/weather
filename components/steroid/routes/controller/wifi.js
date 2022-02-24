const helper = require('../../modules/wifi');

const wifi = async (req, res) => {
    let data;
    switch(req.query.function){
        case 'networks':
            data = await helper.networks();
            return res.send(data);
        case 'interfaces':
            data = await helper.interfaces();
            return res.send(data);
        case 'connections':
            data = await helper.connections();
            return res.send(data);
        default:
            return res.send({error: "Function error, please try 'networks', 'interfaces', 'connections' on URL query parameters."})
    }
};

module.exports = wifi;