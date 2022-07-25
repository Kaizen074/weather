const routes = require('./routes/routes.js');
const express = require("express");
const cors = require("cors");
const steroidAPI = express();

exports.steroid = (settings) => {
    steroidAPI.use(express.urlencoded({extended: true}));
    const allowList = ["http://127.0.0.1", "http://localhost", "127.0.0.1", "localhost"]
    var corsOptionsDelegate = function (req, callback) {
        let corsOptions;
        if (settings.extconn){
            corsOptions = { origin: true };
        } else {
            let origin = {};
            if (req.header('Origin') == undefined){
                origin = new URL(req.rawHeaders[1]);
            }  else {
                origin = new URL(req.header('Origin'));
            }
            if (allowList.indexOf(origin.hostname) !== -1) {
                corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
            } else {
                corsOptions = { origin: false }; // disable CORS for this request
            }
        }
        callback(null, corsOptions); // callback expects two parameters: error and options
    }

    steroidAPI.use(cors(corsOptionsDelegate));
    steroidAPI.use('/', routes);
    steroidAPI.listen(7665, '0.0.0.0');
};