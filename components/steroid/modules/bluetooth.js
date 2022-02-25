const si = require('systeminformation');

const bluetooth = si.bluetoothDevices();
module.exports = bluetooth;