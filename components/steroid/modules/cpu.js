const os = require('os');
const {delay} = require('./helper');
const si = require('systeminformation');

const cpu = {
    usage: async () => {
        let model = os.cpus()[0].model.trim();
        let previous = os.cpus();
        let current = "";
        await delay(300);
        current = os.cpus();
        if (previous.length){
            let usage = {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
                total: 0
            };
            for (let i = 0; i < current.length; i++){
                usage.user += current[i].times.user - previous[i].times.user;
                usage.nice += current[i].times.nice - previous[i].times.nice;
                usage.sys += current[i].times.sys - previous[i].times.sys;
                usage.idle += current[i].times.idle - previous[i].times.idle;
                usage.irq += current[i].times.irq - previous[i].times.irq;
            }
            usage.total = usage.user + usage.sys + usage.irq;
            return {
                model: model,
                usage: usage,
                total: Math.round((usage.total * 100)/(usage.total+usage.idle))
            };
        } else {
            let cores = [];
            let usage = [];
            for (let i = 0; i < current.length; i++){
                usage[i] = {
                    user: 0,
                    nice: 0,
                    sys: 0,
                    idle: 0,
                    irq: 0,
                    total: 0
                };
                usage[i].user = current[i].times.user - previous[i].times.user;
                usage[i].nice = current[i].times.nice - previous[i].times.nice;
                usage[i].sys = current[i].times.sys - previous[i].times.sys;
                usage[i].idle = current[i].times.idle - previous[i].times.idle;
                usage[i].irq = current[i].times.irq - previous[i].times.irq;
                usage[i].total = usage[i].user + usage[i].sys + usage[i].irq;
                cores[i] = Math.round((usage[i].total * 100)/(usage[i].total+usage[i].idle))
            }
            return {
                model: model,
                usage: usage,
                total: cores
            };
        }
    },
    detailed: async () => {
        let model = os.cpus()[0].model.trim();
        let previous = os.cpus();
        let current = "";
        await delay(300);
        current = os.cpus();
        let cores = [];
        let usage = [];
        for (let i = 0; i < current.length; i++){
            usage[i] = {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
                total: 0
            };
            usage[i].user = current[i].times.user - previous[i].times.user;
            usage[i].nice = current[i].times.nice - previous[i].times.nice;
            usage[i].sys = current[i].times.sys - previous[i].times.sys;
            usage[i].idle = current[i].times.idle - previous[i].times.idle;
            usage[i].irq = current[i].times.irq - previous[i].times.irq;
            usage[i].total = usage[i].user + usage[i].sys + usage[i].irq;
            cores[i] = Math.round((usage[i].total * 100)/(usage[i].total+usage[i].idle))
        }
        return {
            model: model,
            usage: usage,
            total: cores
        };
    },
    info: async () => {
        return await si.cpu();
    },
    temperature: async () => {
        return await si.cpuTemperature();
    }
};

module.exports = cpu;