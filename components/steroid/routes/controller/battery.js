const handler = require ('../../modules/battery');

const battery = async (req, res) => {
    let data = await handler.info();
    return res.send(data);
};
module.exports = battery;