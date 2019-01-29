const mongoose = require('mongoose');
const Job = require('../../models/Job')

const controllers = {
	index: (req, res) => {
		Job
			.find()
			.exec()
			.then(data => {
				res
					.json({
						type: "reading Job",
						data: data
					})
					.status(200)
			})
			.catch(err => {
				console.log(`caugth error: ${error}`);
				return res.status(500).json(err);
			})
	},

	create:(req, res) =>{
		const newJob = new Job({  //instancia del modelo
			_id: mongoose.Types.ObjectId(), //id automatico
			description: req.body.description,
			hiringDate: req.body.hiringDate,
			salary: req.body.salary,
			location: req.body.location,
			contactEmail: req.body.contactEmail,
			isStillAvailable: req.body.isStillAvailable
		});
	newJob
	.save()
	.then(data => {
		res
			.json({
				type:"Job created",
				data: data
			})
			.status(200)
	})
	.catch(err => {
		console.log(`caugth error: ${err}`);
		return res.status(500).json(err);
	})
	},
	
	removeBy: (req,res) =>{
		Job
		.deleteOne({_id:req.params.id})
		.then(data => {
			res
				.json({
					type: "Job Removed",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	},

	update: (req,res) =>{
		Job
		.updateOne(
			{_id:req.params.id},
			{description: req.body.description,
			 hiringDate: req.body.hiringDate,
			 salary: req.body.salary,
			 location: req.body.location,
			 contactEmail: req.body.contactEmail,
			 isStillAvailable: req.body.isStillAvailable})

		.then(data => {
			res
				.json({
					type: "Job Updated",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	},

	findBy: (req,res) =>{
		Job

		.findById(req.params.id)
		.then(data => {
			res
				.json({
					type: "Job Found",
					data: data
				})
				.status(200)
		})
		.catch(err =>{
			console.log(`caugth error: ${err}`);
			return res.status(500).json(err);
		})
	},

};

module.exports = controllers;

