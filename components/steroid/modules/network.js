const os = require('os');
const si = require('systeminformation');

const network = {
    defaultinterface: async () => {
        return await si.networkInterfaceDefault();
    },
    defaultgateway: async () => {
        return  await si.defaultgateway();
    },
    interfaces: async (os) => {
        return {interfaces: os.networkInterfaces()};
    },
    usage: async () => {
        let networkUsage = "";
        let data = [];
        let temp = [];
        let child = spawn("powershell.exe",[`Get-NetAdapterStatistics`]);

        child.emit()

        for await (const data of child.stdout) {networkUsage += data.toString();};
        networkUsage = networkUsage.split(/\n/);
        networkUsage.shift();
        networkUsage.shift();
        networkUsage.shift();
        networkUsage.pop();
        networkUsage.pop();
        networkUsage.pop();
        networkUsage.forEach((element, index) => {
            element = element.replace("\r", "");
            element = element.split(" ");
            element.forEach(element2 => {if (element2 != ''){data.push(element2);}});
            temp.push(data);
            data = [];
        })
        networkUsage = temp;
        temp = [];
        data = [];
        for (let i = 0; i < networkUsage.length; i++){
            data.push({
                adapter: networkUsage[i][0],
                receivedBytes: parseInt(networkUsage[i][networkUsage[i].length - 4]),
                sentBytes: parseInt(networkUsage[i][networkUsage[i].length - 2]),
                totalBytes: parseInt(networkUsage[i][networkUsage[i].length - 4])+parseInt(networkUsage[i][networkUsage[i].length - 2]),
                totalGigabytes: Number.parseFloat((parseInt(networkUsage[i][networkUsage[i].length - 4])+parseInt(networkUsage[i][networkUsage[i].length - 2]))/1000000000).toFixed(2)+" GB"
            });
        }
        networkUsage = data;
        data = "";
        return networkUsage;
    },
    connections: async () => {
        return await si.networkConnections();
    },
    urlping: async (url) => {
        return await si.inetChecksite(url);
    },
    hostping: async (ip) => {
        return await si.inetLatency(ip);
    }
};
module.exports = network;