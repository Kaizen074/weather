exports.autolaunch = (path, app, action) => {
    const { spawn } = require('child_process');
    const process = require('process');
    let schtasks;
    switch(action){
        case 'create':
            schtasks = spawn('powershell.exe', [
                'schtasks',
                '/create',
                '/tn Steroid',
                '/tr ' + "'"+app.getPath('exe')+"'",
                '/sc onlogon',
                '/ru ' +process.env.USERNAME,
                '/rl highest',
                '/f',
            ]);
            break;
        case 'delete':
            schtasks = spawn('powershell.exe', [
                'schtasks',
                'delete',
                '/tn Steroid',
                '/f',
            ]);
            break;
    }
}