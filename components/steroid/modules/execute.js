const {execFile} = require('child_process');
const banned = ['cmd', 'powershell', '\Windows', '\windows', '%SystemRoot%', '%WINDIR%', 'Steroid'];

const execute = async (executable, parameters) => {
    let isAccepted = false;
    executable = '"'+executable+'"'; // If there are folders with spaces, this will fix the issue.
    parameters != undefined ? executable += ' '+parameters : false;
    banned.forEach((element) => {
          executable.includes(element) ? // If we match one of the banned words in the executable path
          isReady = true : false; // isAccepted will be true, and won't execute the program
    });
    if (!isAccepted){
        let child = execFile(executable, {shell: true}, (error, stdout, stderr) => {
            if (error) {
              throw error; // In case that something happens
            }
        });
        return {executed: true};
    } else {
        return {error: "This program cannot be executed."};
    };
};

module.exports = execute;