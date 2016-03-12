var friends = require('./../controllers/friends.js');
module.exports = function(app){
	app.get('/friends', function(req,res){
		friends.index(req,res)
	})
	app.post('/addfriend', function(req,res){
		friends.add(req,res)
	})
	app.post('/deletefriend', function(req,res){
		friends.remove(req,res)
	})
}
