var naive = require('../../modules/user/naive.js')();
module.exports = {
	_config: {
		shortcuts: true,
		rest: true,
		actions: true,
	},

	showData: function(req, res){
		
		// (naive.getData(function(response){
		// 	console.log(response);
		// }));

		naive.getData(function(users){
			// console.log(users);
			return res.view('user/users', {users:users}); 
		});
		 // naive.getData(function(response){
		 // 	console.log(response);
		 // });
		// var data = naive.getData();
		// console.log(data);
		// Data.find(function(err, users){
		// 	console.log(users);
		// });

		// var Naive = require('../../modules/user/naive.js');
		// var naive = new Naive();

		// naive.getData();

		
	},

	makeADecission: function(req, res){
		// console.log(req.body['penghasilan']);

		// res.send(naive.calculate(req.body));

		// console.log(naive.calculate(req.body));
		naive.calculate(req.body, function(response){
			res.send(response);
		});
		// for()
		// naive.calculate();
	},

	create: function(req, res, next){
		// console.log(req.params.all());
		var dataObj = req.params.all();
		delete dataObj['id'];
		console.log(dataObj);
		Data.create(req.params.all(), function(err, user){
			if(err){
				return next(err);
			}

			res.redirect('user/naive/showData');
		});
	}
};