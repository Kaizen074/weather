const routes = require('./routes/routes.js');
const express = require("express");
const steroidAPI = express();

exports.steroid = () => {
    steroidAPI.use(express.urlencoded({extended: true}));
    steroidAPI.use('/', routes);
    steroidAPI.listen(7665, '0.0.0.0');
};