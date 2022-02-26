const si = require('systeminformation');

const gpu = async () => {
    return (await si.graphics()).controllers;
};

module.exports = gpu;