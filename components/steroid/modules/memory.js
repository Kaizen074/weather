const os = require('os');
const si = require('systeminformation');

const memory = {
    usage: async () => {
        return {
            totalMb: Number.parseFloat((os.totalmem()/1024)/1024).toFixed(1),
            freeMb: Number.parseFloat((os.freemem()/1024)/1024).toFixed(1)
        }
    },
    layout: async () => {
        return await si.memLayout();
    }
};

module.exports = memory;