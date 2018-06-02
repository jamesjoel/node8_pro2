var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');





app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());





app.get("/", function(req, res){
	var pagedata = { title : "Home Page", pagename : "home"};
	res.render("layout", pagedata);
});

app.get("/about", function(req, res){
	var pagedata = { title : "About Page", pagename : "about"};
	res.render("layout", pagedata);
	// res.render('about');
});

app.get('/signup', function(req, res){
	var pagedata = { title : "About Page", pagename : "signup"};
	res.render("layout", pagedata);
});
app.post('/signup', function(req, res){
	console.log(req.body);
	res.redirect("/");
});



app.get("*", function(req, res){
	res.send("<h1>Page Not Found</h1>");
});
app.listen(3000, function(){
	console.log("Running");
	console.log(path);
});