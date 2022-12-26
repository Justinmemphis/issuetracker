'use strict';
const mongoose = require('mongoose');
const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const server = process.env.SERVER;
const uri = process.env.URI;

mongoose.set('strictQuery', false);
console.log('user, password, server: ',user,password,server);

mongoose.connect(`mongodb+srv://${user}:${password}@${server}`, { useNewUrlParser: true, useUnifiedTopology: true})
	.then( () => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

module.exports = function (app) {

  app.route('/api/issues/:project')
  
    .get(function (req, res){
      let project = req.params.project;
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    });
    
};
