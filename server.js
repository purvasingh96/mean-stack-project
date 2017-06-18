var express 	= 	require('express');
var app 	= 	express();
var morgan 	= 	require('morgan');
var mongoose 	= 	require('mongoose');
var bodyParser 	= 	require('body-parser');
var router	= 	express.Router();
var appRoutes 	= 	require('./app/routes/api')(router);
var path	=	require('path');
mongoose.Promise = global.Promise;﻿
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);

mongoose.connect('mongodb://localhost/faculty_details', function(err){
	if(err){
		console.log("not connected to db"+err);
	}
	else{
		console.log("connected to db");
	}
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname+ '/public/app/views/pages/check_load.html'));
})


app.listen(8080, function(){
	console.log("running the server");
});
