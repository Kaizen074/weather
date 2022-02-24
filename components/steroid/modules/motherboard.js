const si = require('systeminformation');

const motherboardModule = {
    system: async () => {
        return await si.system();
    },
    bios: async () => {
        return await si.bios();
    },
    baseboard: async () => {
        return await si.baseboard();
    },
    chassis: async () => {
        return await si.chassis();
    }
}

module.exports = motherboardModule;