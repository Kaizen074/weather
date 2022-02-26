const si = require('systeminformation');

const battery = {
    info: async () => {
        return await si.battery();
    }
};

module.exports = battery;