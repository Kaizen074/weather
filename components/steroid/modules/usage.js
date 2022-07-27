const http = require('http');

const usage = async (type) => {
    return new Promise((resolve) => {
        http.get(`http://localhost:7666/${type}`, (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on("error", (err) => {
            data = {error: "Steroid metrics are currently offline, if the problem persists please report this issue.", code: "503"};
            resolve(data);
        });
    });
};

module.exports = usage;