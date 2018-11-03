var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/',function(req,res){
	res.end("<h1>Your app deployed on Heroku cloud</h1>");
});

app.listen(port,function(){
	console.log("App running on port %s", port);
});