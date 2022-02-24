const si = require('systeminformation');
const {spawn} = require("child_process");

const filesystem = {
    info: async () => {
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
        });

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
                });
            }
        }
        return data;
    },
    layout: async () => {
        return await si.diskLayout();
    },
    block: async () => {
        return await si.blockDevices();
    }
};

module.exports = filesystem;