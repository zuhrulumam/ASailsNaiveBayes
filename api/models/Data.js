/**
* Data.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

	schema: true,
  attributes: {
  	penghasilan: {
  		type: 'integer'
  	},

  	kelamin: {
  		type: 'string'
  	},

  	tanggungan: {
  		type: 'integer'
  	},

  	pekerjaan: {
  		type: 'string'
  	},

  	hasil: {
  		type: 'string'
  	}
  }
};

