const {spawn, exec} = require("child_process");
const os = require("os");
const cpu_model = os.cpus()[0].model.trim();
const express = require("express");
const si = require("systeminformation");

const steroidAPI = express();
steroidAPI.use(express.urlencoded({extended: true}));
steroidAPI.listen(56665, '0.0.0.0');

const steroid = {
    // OFFLINE FEATURES
    user: async () => {
        return {
            name: os.hostname(),
            info: os.userInfo(['utf8'])
        }
    },
    os: async () => {
        return {
            archquitecture: os.arch(),
            platform: os.platform(),
            release: os.release(),
            version: os.version(),
            type: os.type()
        }
    },
    uptime: async () => {
        return {
            uptime: parseInt(os.uptime())
        }
    },
    cpu: async (sum_cores) => {
        let previous = os.cpus();
        let current = "";
        await steroid.helper.delay(300);
        current = os.cpus();
        if (sum_cores){
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
                model: cpu_model,
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
                model: cpu_model,
                usage: usage,
                total: cores
            };
        }
        
    },
    gpu: async () => {
        return si.graphics();
    },
    memory: async () => {
        return {
            totalMb: Number.parseFloat((os.totalmem()/1024)/1024).toFixed(1),
            freeMb: Number.parseFloat((os.freemem()/1024)/1024).toFixed(1)
        }
    },
    network: {
        interfaces: async () => {
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
        }
    },
    drives: async () => {
        let drives = "";
        let data = [];
        let child = spawn("powershell.exe",[`Get-WmiObject -Class Win32_logicaldisk | Select-Object -Property DeviceID, DriveType, VolumeName, @{L='FreeSpaceGB';E={"{0:N2}" -f ($_.FreeSpace /1GB)}},@{L="Capacity";E={"{0:N2}" -f ($_.Size/1GB)}}`]);

        for await (const data of child.stdout) {
            drives += data.toString();
        };

        drives = drives.split(/\n/);
        drives.forEach(element => {
            element = element.replace("\r", "");
            if (element != null && element != ''){
                element = element.split(/: /);
                data.push(element);
            }
        })

        drives = data;
        data = [];

        for (let i = 0; i < drives.length; i++){
            if (drives[i][0].includes("DeviceID")){
                data.push({
                    deviceID: drives[i][1],
                    driveType: drives[i+1][1],
                    volumeName: drives[i+2][1],
                    FreeSpace: drives[i+3][1]+" GB",
                    Capacity: drives[i+4][1]+" GB",
                })
            }
        }

        drives = data;
        data = "";
        return drives;
    },
    execute: async (executable, parameters) => {
        if (executable.includes("cmd") || executable.includes("powershell") || executable.includes("/Windows") || executable.includes("/windows") || executable.includes("%SystemRoot%") || executable.includes("%WINDIR%") || executable.includes("Steroid") || executable.includes("steroid")){
            return {error: "You are not allowed to execute this command."}
        } else {
            exec('"'+executable+'"'+parameters).unref();
            return {executed: true,}
        }
    },
    helper: { 
        hello: async () => {
            let response = await fetch(steroid.url, {
                method: 'GET',
            });
            return await response.json();
        },
        delay:(ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        storage: {
            get: (key) => {
                return localStorage.getItem(key);
            },
            save: (key, value) => {
                if (typeof(value) == "object"){
                    localStorage.setItem(key, JSON.stringify(value));
                } else {
                    localStorage.setItem(key, value);
                }
            }
        },
    },
    // CORE VARIABLES
    url: 'https://steroidapp.ddns.net/api/',
    header: {'Content-Type': 'application/x-www-form-urlencoded'},
    spotifyHeader: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic '
    },
}


// General
steroidAPI.get('/system', async function(req, res){
    console.log(req);
    let general;
    switch(req.query.function){
        case 'time':
            general = si.time();
            res.send(general);
            break;
        case 'os':
            general = await si.osInfo();
            res.send(general);
            break;
        case 'uuid':
            general = await si.uuid();
            res.send(general);
            break;
        case 'users':
            general = await si.users();
            res.send(general);
            break;
        case 'processes':
            general = await si.processes();
            res.send(general);
            break;
        case 'processload':
            if (req.query.process){
                if (req.query.process !== undefined){
                    general = await si.processLoad(req.query.process);
                } else {
                    general = await si.processLoad("*");
                }
            } else {
                general = await si.processLoad("*");
            }
            res.send(general);
            break;
        case 'services':
            general = await si.services('*');
            res.send(general);
            break;
        default:
            res.send({error: "Function error, please try 'time', 'os', 'uuid', 'users', 'processes', 'processload', 'services' on URL query parameters."});
            break;
    }
});

// Motherboard
steroidAPI.get('/motherboard', async function(req, res){
    let motherboard;
    switch(req.query.function){
        case 'system':
            motherboard = await si.system();
            res.send(motherboard);
            break;
        case 'bios':
            motherboard = await si.bios();
            res.send(motherboard);
            break;
        case 'baseboard':
            motherboard = await si.baseboard();
            res.send(motherboard);
            break;
        case 'chassis':
            motherboard = await si.chassis();
            res.send(motherboard);
            break;
        default:
            res.send({error: "Function error, please try 'system', 'bios', 'baseboard', 'chassis' on URL query parameters."})
            break;
    }
});

// CPU
steroidAPI.get('/cpu', async function(req, res){
    let cpu;
    switch(req.query.function){
        case 'info':
            cpu = await si.cpu();
            res.send(cpu);
            break;
        case 'flags':
            cpu = await si.cpuFlags();
            res.send(cpu);
            break;
        case 'cache':
            cpu = await si.cpuCache();
            res.send(cpu);
            break;
        case 'frequency':
            cpu = await si.cpuCurrentSpeed();
            res.send(cpu);
            break;
        case 'load':
            cpu = await si.currentLoad();
            res.send(cpu);
            break;
        case 'uptimeload':
            cpu = await si.fullLoad();
            res.send(cpu);
            break;
        case 'temperature':
            cpu = await si.cpuTemperature();
            res.send(cpu);
            break;
        default:
            res.send({error: "Function error, please try 'info', 'flags', 'cache', 'frequency', 'load', 'uptimeload', 'temperature' on URL query parameters."})
            break;
    }
});

// Memory
steroidAPI.get('/memory', async function(req, res){
    let memory;
    switch(req.query.function){
        case 'info':
            memory = await si.mem();
            res.send(memory);
            break;
        case 'layout':
            memory = await si.memLayout();
            res.send(memory);
            break;
        default:
            res.send({error: "Function error, please try 'info', 'layout' on URL query parameters."})
            break;
    }
});


// Battery
steroidAPI.get('/battery', async function(req, res){
    let battery = await si.battery();
    res.send(battery);
});

// GPU
steroidAPI.get('/gpu', async function(req, res){
    let gpu = await steroid.gpu();
    res.send(gpu);
});

// File System
steroidAPI.get('/filesystem', async function(req, res){
    let filesystem;
    switch(req.query.function){
        case 'layout':
            filesystem = await si.diskLayout();
            res.send(filesystem);
            break;
        case 'block':
            filesystem = await si.blockDevices();
            res.send(filesystem);
            break;
        case 'size':
            filesystem = await steroid.drives();
            //filesystem = await si.fsSize();
            res.send(filesystem);
            break;
        default:
            res.send({error: "Function error, please try 'layout', 'block', 'size' on URL query parameters."})
            break;
    }
});

// USB
steroidAPI.get('/usb', async function(req, res){
    let usb = await si.usb();
    res.send(usb);
});

// Printer
steroidAPI.get('/printer', async function(req, res){
    let printer = await si.printer();
    res.send(printer);
});

// Audio
steroidAPI.get('/audio', async function(req, res){
    let audio = await si.audio();
    res.send(audio);
});

// Network
steroidAPI.get('/network', async function(req, res){
    let network;
    switch(req.query.function){
        case 'defaultinterface':
            network = await si.networkInterfaceDefault();
            res.send(network);
            break;
        case 'defaultgateway':
            network = await si.networkGatewayDefault();
            res.send(network);
            break;
        case 'interfaces':
            network = await steroid.network.interfaces();
            res.send(network);
            break;
        case 'stats':
            network = await steroid.network.usage();
            res.send(network);
            break;
        case 'connections':
            network = await si.networkConnections();
            res.send(network);
            break;
        case 'urlping':
            if (req.query.url){
                network = await si.inetChecksite(req.query.url);
            } else {
                network = {error: "You must specify an URL on URL query parameters."};
            }
            res.send(network);
            break;
        case 'hostping':
            if (req.query.ip){
                network = await si.inetLatency(req.query.ip);
            } else {
                network = {error: "You must specify an  internal IP on URL query parameters."};
            }
            res.send(network);
            break;
        default:
            res.send({error: "Function error, please try 'defaultinterface', 'defaultgateway', 'interfaces', 'stats', 'connections', 'urlping', 'hostping' on URL query parameters."})
            break;
    }
});

// Wi-Fi
steroidAPI.get('/wifi', async function(req, res){
    let wifi;
    switch(req.query.function){
        case 'networks':
            wifi = await si.wifiNetworks();
            res.send(wifi);
            break;
        case 'interfaces':
            wifi = await si.wifiInterfaces();
            res.send(wifi);
            break;
        case 'connections':
            network = await si.wifiConnections();
            res.send(network);
            break;
        default:
            res.send({error: "Function error, please try 'networks', 'interfaces', 'connections' on URL query parameters."})
            break;
    }
});

// Bluetooth
steroidAPI.get('/bluetooth', async function(req, res){
    let bluetooth = await si.bluetoothDevices();
    res.send(bluetooth);
});

// Execute
steroidAPI.get('/execute', async function(req, res){
    if (executable.includes("cmd") || executable.includes("powershell") || executable.includes("/Windows") || executable.includes("/windows") || executable.includes("%SystemRoot%") || executable.includes("%WINDIR%") || executable.includes("Steroid") || executable.includes("steroid")){
        res.send({error: "You are not allowed to execute this command."});
    } else {
        exec('"'+executable+'"'+parameters).unref();
        res.send({executed: true});
    }
});