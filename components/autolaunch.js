exports.autolaunch = (path, app, action) => {
    const {shell} = require('electron');
    const fs = require('fs');
    let shortcutPath = path.join(app.getPath('appData'), "/Microsoft/Windows/Start Menu/Programs/Startup/Steroid.lnk");
    let options = {
        target: app.getPath('exe'),
        cwd: app.getAppPath(),
        description: 'Wallpaper Engine Web Extension',
    }

    switch(action){
        case 'create':
            fs.stat(shortcutPath, (error, stats) => {
                if (error){
                    shell.writeShortcutLink(shortcutPath, 'create', options);
                }
            });
            break;
        case 'delete':
            fs.unlink(shortcutPath, (error) => {
            });
    }
}