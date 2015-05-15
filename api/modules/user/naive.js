
var Promise = require('bluebird');

var naive = module.exports = function(){
	return obj = {
		
		getData: function(cb){
			var userArr = [];
			
			Data.find().sort('id asc').exec(function(err, users){
				return cb(users);
			});
			// Data.find(function(err, users){
			// 	// var users = users;

			// 	return cb(users);
			// 	// obj.getJumlah(users).then(function(jmlh){
			// 	// 	userArr['jumlah'] = jmlh;
			// 	// 	return obj.coba(jmlh);
			// 	// }).then(function(jmlh2){
			// 	// 	userArr['jumlah2'] = jmlh2;
			// 	// 	console.log(userArr);
			// 	// });
			// });
		},

		calculate: function(data){
			var arrHasil = [];

			// attribute size
			const attributeSize = Object.keys(data).length;
			// arrHasil[1] = ['lalala', 'lilili'];
			// console.log(arrHasil[1]);
			Data.find().sort('id asc').exec(function(err, users){

				var berhak = obj.calculateAttribute('hasil', 'BERHAK', users);
				var tidakBerhak = obj.calculateAttribute('hasil', 'tIDAK BERHAK', users);
				for(var i = 0; i< attributeSize; i++){
					var key = Object.keys(data)[i];
					obj.calculateAttribute(key, data[key], users);
					//have a var that will multiple with berhak and tidak berhak each loop
				}
			});
			

			
		},

		calculateAttribute: function(attribute, value, data){
			
			//how to calculate in one row of data
			console.log(data.length);
		},



		// getJumlah: Promise.method(function(users){
		// 	// console.log(users.length);
		// 	return users.length;
		// }),

		// coba: function(some){
		// 	return 5;
		// }



		
	};
};
