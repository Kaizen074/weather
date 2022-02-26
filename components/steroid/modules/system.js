const si = require('systeminformation');

const system = {
    time: async () => {
        return si.time();
    },
    os: async () => {
        return si.osInfo();
    },
    uuid: async () => {
        return si.uuid();
    },
    users: async () => {
        return si.users();
    },
    display: async () => {
        return (await si.graphics()).displays;
    },
    processes: async () => {
        return si.processes();
    },
    processload: async () => {
        return si.processLoad('*');
    },
    services: async () => {
        return si.services('*');
    }
}

module.exports = system;