var naive = require('../../modules/user/naive.js')();
module.exports = {
	_config: {
		shortcuts: true,
		rest: true,
		actions: true,
		model: 'data'
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

		naive.calculate(req.body);

		// console.log(Object.keys(req.body)[0]);
		// for()
		// naive.calculate();
	}
};