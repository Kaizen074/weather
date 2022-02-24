const si = require('systeminformation');

const wifi = {
    networks: async () => {
        return await si.wifiNetworks();
    },
    interfaces: async () => {
        return await si.wifiInterfaces();
    },
    connections: async () => {
        return await si.wifiConnections();
    },
}

module.exports = wifi;