//let User = require('../models/userModel');
//let Frm = require('../models/userModel');

//let userList = [];
//let JAVA = new Frm('JAVA', '200', '06-12-2021', '7-12-2021')
//let HTMLCSS =  new Frm('HTML CSS', '150', '19-12-2021', '20-12-2021')
//let Nodejs =  new Frm('Node Js', '250', '09-12-2021', '11-12-2021')

var mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mettiouihaha1234',
    database : 'rooms'

});

//let Formation = [JAVA, HTMLCSS, Nodejs]






exports.List = function(req, res){
    connection.query("select * from user;", function(error, result){
        if (error) console(error);
        res.render('tacheList.ejs', {rooms: result});
    });
}
exports.userFormAdd = function(req, res){
    res.render('tacheadd.ejs');
}


exports.userNew = function(req, res){
    let room = {"name":req.body.name};
    let long = {"length":req.body.length};
    let lar = {"width":req.body.width};
    connection.query("INSERT INTO user SET ?,?,?", [ room , lar , long], function(error, result){
        if (error) console.log(error);
        res.redirect('/');
    });
}
