const si = require('systeminformation');

const printer = {
    info: async () => {
        return await si.printer();
    }
};

module.exports = printer;