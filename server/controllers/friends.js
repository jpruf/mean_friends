var mongoose = require('mongoose');
var Friend = mongoose.model('friends');
module.exports = (function(){
	return {
		index: function(req,res){
			Friend.find({}, function(err,results){
				if(err){
					console.log('error');
				}
				else {
					res.json(results);
				}
			})
		},
		add: function(req,res){
			var new_friend = new Friend(req.body);
			new_friend.save(function(err, data){
				if (err){
					console.log(err);
					console.log('Error saving new friend');
				}
				else {
					res.redirect('/friends');
				}
			})
		},
		remove: function(req,res){
			Friend.remove({_id: req.body._id}, function(err){
				if(err){
					console.log(err);
					console.log('error removing friend');
				}
				else {
					res.redirect('/friends');
				}
			})
			
		}
	}
})();