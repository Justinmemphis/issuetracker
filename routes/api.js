'use strict';
const mongoose = require('mongoose');
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const server = process.env.SERVER;
const uri = process.env.URI;

mongoose.set('strictQuery', false);

mongoose.connect(`mongodb+srv://${user}:${password}@${server}`, { useNewUrlParser: true, useUnifiedTopology: true})
	.then( () => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

const Schema = mongoose.Schema;

const IssueSchema = new Schema({
	issue_title: { type: String, required: true },
	issue_text: { type: String, required: true},
	created_by: { type: String, required: true},
	assigned_to: { type: String},
	status_text: { type: String},
	created_on: { type: Date},
	updated_on: { type: Date},
	open: { type: Boolean, default: true},
	project: { type: String, required: true}
	
});

const Issue = new mongoose.model('Issue', IssueSchema);

module.exports = function (app) {

	app.route('/api/issues/:project')
  
		.get(async (req, res) => {
			let project = req.params.project;
			/*
			console.log('req.params.project: ',req.params.project);
			console.log('req.params: ',req.params);
			console.log('req.query: ',req.query);
			console.log('req.body: ',req.body);
			*/
			let projectString = JSON.stringify(req.params.project);
			// console.log('projectString1: ',projectString);
			try {
				const results = await Issue.find({
					project:projectString,
					...req.query.issue_title ? { issue_title: req.query.issue_title } : {},
					...req.query.issue_text ? { issue_text: req.query.issue_text } : {},
					...req.query.created_by ? { created_by: req.query.created_by } : {},
					...req.query.assigned_to ? { assigned_to: req.query.assigned_to } : {},
					...req.query.status_text ? { status_text: req.query.status_text } : {},
					...req.query.created_on ? { created_on: req.query.created_on } : {},
					...req.query.updated_on ? { updated_on: req.query.updated_on } : {},
					...req.query.open ? { open: req.query.open } : {},
					...req.query._id ? { _id: req.query._id } : {}
				});
				console.log(results);
				if (results == '') {
					res.json({
						error: 'no project found with that name'
					});
				} else {
					res.send(results);
				};
			} catch (err) {
				console.log('Error - catch block');
				res.json({
					error: 'invalid input'
				});
			}
		})
    
		.post(async (req, res) => {
			let project = req.params.project;
		
			console.log('req.params.project: ',req.params.project);
			console.log('req.params: ',req.params);
			console.log('req.query: ',req.query);
			console.log('req.body: ',req.body);
		
			let projectString = JSON.stringify(req.params.project);
			console.log('projectString2: ',projectString);
			
			try {
				const newIssue = new Issue({
					issue_title: req.body.issue_title,
					issue_text: req.body.issue_text,
					created_by: req.body.created_by,
					assigned_to: req.body.assigned_to || '',
					status_text: req.body.status_text || '',
					created_on: new Date(),
					updated_on: new Date(),
					project: projectString
				});
				await newIssue.save();
				console.log('newIssue is: ',newIssue);
				return res.json({
					'_id': newIssue._id,
					'issue_title': newIssue.issue_title,
					'issue_text': newIssue.issue_text,
					'created_by': newIssue.created_by,
					'assigned_to': newIssue.assigned_to,
					'status_text': newIssue.status_text,
					'created_on': newIssue.created_on,
					'updated_on': newIssue.updated_on,
					'open': newIssue.open,
					'project': newIssue.project
				});
			} catch (err) {
				console.log('Error - catch block');
				res.json({
					error: 'required field(s) missing'
				});
			}
		})
    
		.put(async (req, res) => {
			let project = req.params.project;
				
			console.log('req.params.project: ',req.params.project);
			console.log('req.params: ',req.params);
			console.log('req.query: ',req.query);
			console.log('req.body: ',req.body);
		 		
			let projectString = JSON.stringify(req.params.project);
			console.log('projectString3: ',projectString);
			
			if (!req.body._id) {
				res.json({
					error: 'missing _id'
				});
			} else if (!req.body.issue_title && 
				!req.body.issue_text && 
				!req.body.created_by && 
				!req.body.assigned_to && 
				!req.body.status_text) {

				res.json({
					error: `'no update field(s) sent', '_id': ${req.body._id}`
				});
			} else {
				try {
					const results = await Issue.updateOne({ _id: req.body._id }, {
							...req.body.issue_title ? { issue_title: req.body.issue_title } : {},
							...req.body.issue_text ? { issue_text: req.body.issue_text } : {},
							...req.body.created_by ? { created_by: req.body.created_by } : {},
							...req.body.assigned_to ? { assigned_to: req.body.assigned_to } : {},
							...req.body.status_text ? { status_text: req.body.status_text } : {}
					});
					console.log(results);
					res.json({
						result: `successfully updated', '_id': ${req.body._id}`
					});
				} catch (err) {
					console.log('Error - catch block');
					res.json({
						error: `'could not update', '_id': ${req.body._id}`
					});
				}
      
			};
		})
    
		.delete(async (req, res) => {
			let project = req.params.project;
			/*
			console.log('req.params.project: ',req.params.project);
			console.log('req.params: ',req.params);
			console.log('req.query: ',req.query);
			console.log('req.body: ',req.body);
			*/
			try {
				const results = await Issue.deleteOne({ _id: req.body._id});
				console.log(results);
				res.send(results);
			} catch (err) {
				console.log('Error - catch block');
				res.json({
					error: 'invalid input'
				});
			}
      
		})   
};
