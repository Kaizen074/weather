let appTray = '';

exports.tray = (app, Menu, Tray, ipcMain, path, settings, autolaunch, fs) => {
    appTray = new Tray(path.join(__dirname, '../favicon.ico'));
    const contextMenu = Menu.buildFromTemplate([
        {label: 'Steroid - v0.1-Alpha', enabled: false,},
        {type: "separator"},
        {label: 'Settings', submenu: [
            {label: 'Run on startup',  type: 'checkbox', checked: settings.autoexec, click: () => {
                if (contextMenu.items[2].submenu.items[0].checked){
                    autolaunch(path, app, 'create');
                } else {
                    autolaunch(path, app, 'delete');
                }
                settings.autoexec = contextMenu.items[2].submenu.items[0].checked;
                let data = JSON.stringify(settings, null, "\t");
                fs.writeFileSync(path.join(app.getAppPath(), '/settings.json'), data);
            }}
        ]},
        {label: "About", click: () => { require('electron').shell.openExternal('https://steroid-app.github.io')}},
        {type: "separator"},
        {label: "Close", click: () => {settings.exit = true; app.quit();}}
    ]);
    
    appTray.setToolTip("Steroid");
    appTray.setContextMenu(contextMenu);
    appTray.addListener("double-click", () => {
        ipcMain.emit('window-control', false, 'show');
    });

    if (contextMenu.items[2].submenu.items[0].checked){
        autolaunch(path, app, 'create');
    }
}

