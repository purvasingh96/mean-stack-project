var User 		= 	require('../models/user');
var Student 	=	require('../models/student')
var jwt 		= 	require('jsonwebtoken');
var secret		=	'vit';	//secret is used for verification
module.exports  = function(router){
	//faculty registration
	router.post('/faculty', function(req, res){
		var user 		= new User();
		user.username 	= req.body.username;
		user.password 	= req.body.password;
		if(req.body.username	== ""||req.body.password==""){

				res.json({success: false, message:'faculty empty'});
		}
		else{
				user.save(function(err){
				if(err){
					res.json({success: false, message:'faculty exists'});
				}
				else{
					//res.send("faculty created");
					res.json({success: true, message:'faculty created'});
				}
			});
		}
	
});
	//faculty login route
	//localhost://api/authenticate
	router.post('/authenticate', function(req, res){
		//console.log("hello there");
		User.findOne({username: req.body.username}).select('username password').exec(function(err, user){
			if(err) throw err;

			if(!user){
				res.json({success: false, message:'couldnot authenticate user'});
			}
			else if (user) {
              if (req.body.password) {
                  var validPassword = user.comparePassword(req.body.password);
                  if (!validPassword) {
                      res.json({ success: false, message: 'Could not validate Password' });
                  } else {
                  	  var token = jwt.sign({username: user.username}, secret, {expiresIn: '24h'});
                      res.json({ success: true, message: 'User Authenticate', token: token });
                  }
              } else {
                  res.json({ success: false, message: 'No password provided' });
              }
          }
		});
	
});
	//decrypt token - using middleware
	router.use(function(req, res, next){
		//way to get token - request, url, headers
		var token = req.body.token || req.body.query || req.headers['x-access-token'];
		if(token){
			//verify token
			jwt.verify(token, secret, function(err, decoded){
				if(err){
					//when faculty tries to login after 24hrs with same token
					res.json({success: false, message:'Token Invalid'});
				}
				else{
					//decoded sends username
					req.decoded=decoded;
					next();	//goes to /current_faculty
				}
			});
		}
		else{
			res.json({success: false, message: 'No token provided'});
		}
	});
		router.post('/current_faculty', function(req, res){
		res.send(req.decoded);	
	});

	router.get('/management', function(req, res){
		Student.find({}, function(err, students){
			if(err){
				throw err;
			}
			else{
				res.json({success: true, students: students});
			}
		})
	});
	
	return router;
}

