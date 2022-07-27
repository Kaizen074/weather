const si = require('systeminformation');

const usage = require('./usage');

const gpu = {
    usage: async () => {
        return await usage('gpu');
    },
    info: async () => {
        return (await si.graphics()).controllers;
    }
};

module.exports = gpu;