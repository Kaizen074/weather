const si = require('systeminformation');

const bluetooth = async () => {
    return await si.bluetoothDevices();
};

module.exports = bluetooth;