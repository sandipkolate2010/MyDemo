const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsersSchema = new Schema({
  vendorname: {type: String},
  firstname: {type: String, required: true, max: 100},
  lastname: {type: String, required: true, max: 100},
  email: {type: String, required: true, max: 100},
	address: {type: String},
	contact: {type: String, required: true, max: 100},
	user: {type: String, required: true, max: 100},
	password: {type: String, required: true, max: 100},
	role: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Users', UsersSchema);

