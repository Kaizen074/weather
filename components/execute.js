exports.execute = (path) => {
    const { spawn } = require('child_process');
    const child = spawn(path.join(__dirname, '../extensions/steroid-service/steroid-service.exe'));
    child.stdout.on('data', data => {
        console.log(`stdout:\n${data}`);
    });
      
    child.stderr.on('data', data => {
        console.error(`stderr: ${data}`);
    });
}
