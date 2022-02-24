const si = require('systeminformation');

const gpu = async () => {
    return si.graphics();
};
module.exports = gpu;