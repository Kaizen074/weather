const { ipcRenderer } = require('electron');

window.onload = async () => {
    ipcRenderer.on('SakuraUpdater', (event, message) => {
        document.getElementById('download-label').innerText = message.text;
        if (message.loader.active){
            document.getElementById('bar-progress').style.width = message.loader.percentage + '%';
        };
    });
};