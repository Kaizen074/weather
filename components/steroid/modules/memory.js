const os = require('os');
const si = require('systeminformation');

const usage = require('./usage');

const memory = {
    usage: async () => {
        return await usage('memory');
    },
    layout: async () => {
        return await si.memLayout();
    }
};

module.exports = memory;