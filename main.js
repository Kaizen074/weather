const fs = require('fs');
const path = require('path');

const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');

const Sakura = require('@ivanbogaeb/sakura');

try {
    const settings = require('./settings.json');
    const { tray } = require('./components/tray');
    const { window } = require('./components/window');
    const { updater } = require('./components/updater');
    const { execute } = require('./components/execute');
    const { autolaunch } = require('./components/autolaunch');
    const { steroid } = require('./components/steroid/steroid');

    app.whenReady().then(async () => {
        tray(app, Menu, Tray, ipcMain, path, settings, autolaunch, fs); // Activate tray icons, if something fails you can exit the app
        let uptodate = await updater(app, path, Sakura); // Check for updates, returns true or false, nothing fancy
        if (uptodate){
            window(app, BrowserWindow, ipcMain, path, settings); // Run Steroid window
            execute(path); // Steroid service execution
            steroid(); // Aditional steroid functions
        };
    }).catch(error => {
        console.log("STEROID COMPONENT ERROR:\n");
        console.warn(error);
        throw new Error(error);
    });
} catch(error) {
    console.warn(error);
    throw new Error(error);
};