const os = require('os');
const si = require('systeminformation');

const usage = require('./usage');

const cpu = {
    usage: async () => {
        return await usage('cpu');
    },
    info: async () => {
        return await si.cpu();
    }
};

module.exports = cpu;