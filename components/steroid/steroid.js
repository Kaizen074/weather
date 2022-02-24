const routes = require('./routes/routes.js');
const express = require("express");
const steroidAPI = express();

exports.steroid = () => {
    steroidAPI.use(express.urlencoded({extended: true}));
    steroidAPI.use('/', routes);
    steroidAPI.listen(56665, '0.0.0.0');
};