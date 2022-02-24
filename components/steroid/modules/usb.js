const si = require('systeminformation');

const usb = {
    info: async () => {
        return await si.usb();
    }
}

module.exports = usb;