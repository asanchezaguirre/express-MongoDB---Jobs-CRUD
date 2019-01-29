const mongoose = require('mongoose');

//crear un esquema
const Schema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId, //generar id de manera automatica
	description: { type:String, required: true },
	hiringDate: { type:Date, required: true },
	salary: Number,
	location: { type:String, required: true },
	contactEmail: { type:String, required: true },
	isStillAvailable: { type:Boolean, default: true },
});

module.exports = mongoose.model('Job', Schema);