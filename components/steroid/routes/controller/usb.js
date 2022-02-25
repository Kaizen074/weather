const handler = require('../../modules/usb');

const usb = async (req, res) => {
    let data = await handler.info();
    return res.send(data);
};
module.exports = usb;