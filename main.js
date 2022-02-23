const fs = require('fs');
const path = require('path');
const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');

const settings = require('./settings.json');
const { tray } = require('./components/tray');
const { window } = require('./components/window');
const { execute } = require('./components/execute');
const { autolaunch } = require('./components/autolaunch');
const { steroid } = require('./components/steroid/steroid');
//const { discordPresence } = require('./components/presence');

//app.setUserTasks([]);

app.whenReady().then(() => {
    // Main content
    // This shit needs redux/react context... But well, I can't complain
    tray(app, Menu, Tray, ipcMain, path, settings, autolaunch, fs);
    window(BrowserWindow, ipcMain, path, settings);
    execute(path);
    // Steroid Service / Misc
    steroid(discordPresence());
    //discordPresence(); // Currently not working as intended, fixes needed
}).catch(error => {
    fs.writeFile('log.txt', JSON.stringify(error), function (err){
        if (err) throw err;
    });
});