const si = require('systeminformation');

const system = {
    time: async () => {
        return si.time();
    },
    os: async () => {
        return await si.osInfo();
    },
    uuid: async () => {
        return await si.uuid();
    },
    users: async () => {
        return await si.users();
    },
    display: async () => {
        return (await si.graphics()).displays;
    },
    processes: async () => {
        return await si.processes();
    },
    processload: async () => {
        return await si.processLoad('*');
    },
    services: async () => {
        return await si.services('*');
    }
}

module.exports = system;