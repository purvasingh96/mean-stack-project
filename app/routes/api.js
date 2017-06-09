var User 		= 	require('../models/user');
module.exports  = function(router){
	router.post('/faculty', function(req, res){
		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		if(req.body.username== " "||req.body.password==" "){

				res.json({'success': false, 'message':'faculty exists'});
		}
		else{
				user.save(function(err){
				if(err){
					res.json({'success': false, 'message':'faculty exists'});
				}
				else{
					//res.send("faculty created");
					res.json({'success': false, 'message':'faculty created'});
				}
			});
		}
	
});
	return router;
}