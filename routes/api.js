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
	open: { type: Boolean}
	
});

const Issue = new mongoose.model('Issue', IssueSchema);

module.exports = function (app) {

	app.route('/api/issues/:project')
  
		.get(function (req, res){
			let project = req.params.project;
      
		})
    
		.post( async (req, res) => {
			let project = req.params.project;
			console.log('req.params.project: ',req.params.project);
			console.log('req.params: ',req.params);
			console.log('req.query: ',req.query);
			console.log('req.body: ',req.body);
			const newIssue = new Issue({
				issue_title: req.body.issue_title,
				issue_text: req.body.issue_text,
				created_by: req.body.created_by,
				assigned_to: req.body.assigned_to,
				status_text: req.body.status_text,
				open: 'true',
				created_on: new Date(),
				updated_on: new Date()
			});
			console.log('newIssue is: ',newIssue);
			await newIssue.save();
			return res.json({
				'_id': newIssue._id,
				'issue_title': newIssue.issue_title,
				'issue_text': newIssue.issue_text,
				'created_by': newIssue.created_by,
				'assigned_to': newIssue.assigned_to,
				'status_text': newIssue.status_text,
				'created_on': newIssue.created_on,
				'updated_on': newIssue.updated_on,
				'open': newIssue.open
			});
		})
    
		.put(function (req, res){
			let project = req.params.project;
      
		})
    
		.delete(function (req, res){
			let project = req.params.project;
      
		})   
};
