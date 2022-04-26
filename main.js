const fs = require('fs');
const path = require('path');
const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');

try {
    const settings = require('./settings.json');
    const { tray } = require('./components/tray');
    const { window } = require('./components/window');
    const { execute } = require('./components/execute');
    const { autolaunch } = require('./components/autolaunch');
    const { steroid } = require('./components/steroid/steroid');
    const { discordPresence } = require('./components/presence');

    app.whenReady().then(() => {
        // Main content
        tray(app, Menu, Tray, ipcMain, path, settings, autolaunch, fs);
        window(BrowserWindow, ipcMain, path, settings);
        execute(path);
        // Steroid Service / Misc
        steroid();
        // discordPresence(); // Currently not working as intended, fixes needed, better work on the good stuff
    });
} catch(error) {
    console.warn(error);
}



//app.setUserTasks([]);