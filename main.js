const fs = require('fs');
const path = require('path');
const uaup = require('uaup-js');
const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');

try {
    const settings = require('./settings.json');
    const { tray } = require('./components/tray');
    const { window } = require('./components/window');
    const { updater } = require('./components/updater');
    const { execute } = require('./components/execute');
    const { autolaunch } = require('./components/autolaunch');
    const { steroid } = require('./components/steroid/steroid');
    // const { discordPresence } = require('./components/presence');

    app.whenReady().then(async () => {
        await updater(uaup, BrowserWindow, ipcMain, path, settings); // Check for updates
        tray(app, Menu, Tray, ipcMain, path, settings, autolaunch, fs); // Activate tray icons
        window(BrowserWindow, ipcMain, path, settings); // Run Steroid window
        execute(path); // Steroid service execution
        steroid(); // Aditional steroid functions

        // discordPresence(); // Currently not working as intended, fixes needed, better work on the good stuff
    });
} catch(error) {
    console.warn(error);
}



//app.setUserTasks([]);