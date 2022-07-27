const os = require('os');
const si = require('systeminformation');

const usage = require('./usage');

const network = {
    defaultinterface: async () => {
        return await si.networkInterfaceDefault();
    },
    defaultgateway: async () => {
        return  await si.defaultgateway();
    },
    interfaces: async (os) => {
        return {interfaces: os.networkInterfaces()};
    },
    usage: async () => {
        return await usage('network');
    },
    connections: async () => {
        return await si.networkConnections();
    },
    urlping: async (url) => {
        return await si.inetChecksite(url);
    },
    hostping: async (ip) => {
        return await si.inetLatency(ip);
    }
};

module.exports = network;