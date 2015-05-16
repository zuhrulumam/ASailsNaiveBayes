
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

		calculate: function(data, cb){
			var arrHasil = [];
			delete data['hasil'];
			this.data = data;
			this.hasil = "";

			// attribute size
			// const attributeSize = Object.keys(data).length;
			// arrHasil[1] = ['lalala', 'lilili'];
			// console.log(arrHasil[1]);
			Data.find().sort('id asc').exec(function(err, users){
				// atau langsung pisah user menjadi berhak dan tidak berhak baru dihitung per atribute
				var userSize = users.length;
				var Berhak = 0;
				var tidakBerhak = 0;
				var arrUsersBerhak = {
					penghasilan : 0,
					kelamin : 0,
					tanggungan : 0,
					pekerjaan : 0
				};
				var arrUsersTidakBerhak = {
					penghasilan : 0,
					kelamin : 0,
					tanggungan : 0,
					pekerjaan : 0
				};

				// var start = new Date().getTime();
				// var temp = obj.calculateAttribute(obj.data, users[0], arrUsersBerhak);
				// console.log(temp);
				// for(var i = 0; i<usersSize; i++){
				// 	if(users[i].hasil == 'BERHAK'){
				// 		Berhak += 1;
				// 		arrUsersBerhak = obj.calculateAttribute(obj.data, users[i], arrUsersBerhak);
				// 		// arrUsersBerhak.push(i);

				// 	} else {
				// 		tidakBerhak+=1;
				// 		arrUsersTidakBerhak = obj.calculateAttribute(obj.data, users[i], arrUsersTidakBerhak);
				// 		// arrUsersTidakBerhak.push(i);
				// 	}
				// } 
				
				//add log please

				Promise.each(users, function(user){
					if(user.hasil == 'BERHAK'){
						Berhak += 1;
						arrUsersBerhak = obj.calculateAttribute(obj.data, user, arrUsersBerhak);
						// arrUsersBerhak.push(i);

					} else {
						tidakBerhak+=1;
						arrUsersTidakBerhak = obj.calculateAttribute(obj.data, user, arrUsersTidakBerhak);
						// arrUsersTidakBerhak.push(i);
					}
				}).then(function(){
					// var end = new Date().getTime();
					// var time = end - start;
					// console.log('Execution time: ' + time);
					// console.log(arrUsersBerhak);
					// console.log(arrUsersTidakBerhak);
					if(obj.calculateChance(Berhak, arrUsersBerhak, userSize) > 
						obj.calculateChance(tidakBerhak, arrUsersTidakBerhak, userSize)){
						// console.log(obj.calculateChance(Berhak, arrUsersBerhak, userSize));
						// console.log(obj.calculateChance(tidakBerhak, arrUsersTidakBerhak, userSize));
						obj.hasil = 'BERHAK';
						
					} else {
						obj.hasil = 'TIDAK BERHAK';
					}
					return cb(obj.hasil);
				});


				// console.log("berhak= "+Berhak+"tidak Berhak= "+tidakBerhak);
				// console.log(arrUsersBerhak);
				// console.log(arrUsersTidakBerhak);

				// var end = new Date().getTime();
				// var time = end - start;
				// console.log('Execution time: ' + time);
				// var berhak = obj.calculateAttribute('hasil', 'BERHAK', users);
				// var tidakBerhak = obj.calculateAttribute('hasil', 'TIDAK BERHAK', users);
				// for(var i = 0; i< attributeSize; i++){
				// 	var key = Object.keys(data)[i];
				// 	obj.calculateAttribute(key, data[key], users);
				// 	//have a var that will multiple with berhak and tidak berhak each loop
				// }
			});
			

			
		},

		calculateAttribute: function(data, user, arrUser){
			
			//how to calculate in one row of data
			// console.log(Object.keys(data).length);
			// console.log(Object.keys(user)[0]);
			// console.log(Object.keys(arrUser)[0]);

			var dataAttributeSize = Object.keys(data).length;

			for(var i = 0; i<dataAttributeSize; i++){
				var key = Object.keys(data)[i];
				if(data[key] == user[key]){
					arrUser[key]+=1;
				}

				// if(1==1){
				// 	arrUser[Object.keys(arrUser)[i]]+=1;
				// 	console.log(arrUser);
				// }
			}

			// console.log(arrUser);
			return arrUser;
			// return {
			// 	penghasilan: arrUser.penghasilan+1,
			// 	kelamin: arrUser.kelamin+2,
			// 	tanggungan: arrUser.tanggungan+3,
			// 	pekerjaan: arrUser.pekerjaan+4,
			// };
		},

		calculateChance: function(sameAttributeSum, objSum, dataSum){
			var objSize = Object.keys(objSum).length;
			var temp = 1;
			// console.log(objSum);
			for(var i = 0; i<objSize;i++){
				temp *= objSum[Object.keys(objSum)[i]]/sameAttributeSum;
				// console.log(temp);
			}
			// console.log(sameAttributeSum/dataSum);
			temp = temp * (sameAttributeSum/dataSum);
			// console.log(temp);
			return temp;
		}



		// getJumlah: Promise.method(function(users){
		// 	// console.log(users.length);
		// 	return users.length;
		// }),

		// coba: function(some){
		// 	return 5;
		// }



		
	};
};
