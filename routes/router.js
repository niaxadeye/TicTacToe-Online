const express = require("express");
const router = express.Router();
const path = require('node:path');

router.use(express.static('views'))

router.get("/", function(req, res){
    let pathHome = path.join(__dirname, '..', 'views' , 'Login.html')
    res.sendFile(pathHome);
});

router.get("/login", function(req, res){
    let pathLogin = path.join(__dirname, '..', 'views' , 'Login.html')
    res.sendFile(pathLogin);
});

router.get("/register", function(req, res){
    let pathReg = path.join(__dirname, '..', 'views' , 'Register.html')
    res.sendFile(pathReg);
});

module.exports = router;