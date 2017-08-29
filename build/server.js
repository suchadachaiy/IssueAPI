"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var auth = require("./helpers/auth");
var company_1 = require("./controllers/company"); /* เรียก controller company */
var user_1 = require("./controllers/user");
var customer_1 = require("./controllers/customer");
var issue_1 = require("./controllers/issue");
var login_1 = require("./controllers/login");
/* สร้าง express application instance */
var app = express();
/* the port the express app will listen on */
var port = process.env.PORT || '3000'; /* set port || default port */
/**
 * เรียกใช้****************************************************
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(auth.initialize());
app.use('/company', company_1.CompanyController); /* เรียก controller company */
app.use('/user', user_1.UserController);
app.use('/customer', customer_1.CustomerController);
app.use('/issue', issue_1.IssueController);
app.use('/login', login_1.LoginController);
/**
 * **********************************************************
 */
/* serve the application at the given port */
app.listen(port, function () {
    /* success callback */
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=C:/Users/suchaa/Desktop/Node28-8-17/IssueAPI/server.js.map