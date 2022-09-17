let appTray = '';

exports.tray = (app, Menu, Tray, ipcMain, path, settings, autolaunch, fs) => {
    const version = require('../version.json');
    appTray = new Tray(path.join(__dirname, '../favicon.ico'));
    const contextMenu = Menu.buildFromTemplate([
        {label: `Steroid - ${version}`, enabled: false,},
        {type: "separator"},
        {label: 'Settings', submenu: [
            {label: 'Run on startup',  type: 'checkbox', checked: settings.autoexec, click: () => {
                if (contextMenu.items[2].submenu.items[0].checked){
                    autolaunch(app, 'create');
                } else {
                    autolaunch(app, 'delete');
                }
                settings.autoexec = contextMenu.items[2].submenu.items[0].checked;
                let data = JSON.stringify(settings, null, "\t");
                fs.writeFileSync(path.join(app.getAppPath(), '/settings.json'), data);
            }},
            {label: 'Allow external connections',  type: 'checkbox', checked: settings.extconn, click: () => {
                console.log(contextMenu.items[2].submenu.items[1].checked);
                settings.extconn = contextMenu.items[2].submenu.items[1].checked;
                let data = JSON.stringify(settings, null, "\t");
                fs.writeFileSync(path.join(app.getAppPath(), '/settings.json'), data);
                setTimeout(function(){
                    app.relaunch();
                    app.quit();
                },1000);
            }}
        ]},
        {label: "About", click: () => { require('electron').shell.openExternal('https://steroid-app.github.io')}},
        {type: "separator"},
        {label: "Close", click: () => {settings.exit = true; app.quit();}}
    ]);
    
    appTray.setToolTip("Steroid");
    appTray.setContextMenu(contextMenu);
    /*appTray.addListener("double-click", () => {
        ipcMain.emit('window-control', false, 'show');
    });*/

    if (contextMenu.items[2].submenu.items[0].checked){
        autolaunch(path, app, 'create');
    };
}

