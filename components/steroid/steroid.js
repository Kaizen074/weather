const routes = require('./routes/routes.js');
const express = require("express");

const steroidAPI = express();

exports.steroid = (settings) => {
    steroidAPI.use(express.urlencoded({extended: true}));
    
    const originFilter = (req, res, next) => {
        if (settings.extconn){
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        } else {
            const allowList = ["http://127.0.0.1:7665", "http://localhost:7665", "127.0.0.1:7665", "localhost:7665"]
            if (allowList.indexOf(req.headers.host) !== -1) {
                next();
            };
        };
    };

    steroidAPI.use('/', originFilter, routes);
    steroidAPI.listen(7665, '0.0.0.0');
};