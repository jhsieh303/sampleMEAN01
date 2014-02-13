//nodeJs///////////////


//RESTful API Routes in nodeJs//////////
/*
Express routes to handle or API calls


        HTTP Verb   ::  URL     ::Description
GET ::   /api/todos           ::   Get all of the todos from Server
POST ::   /api/todos           :: Create a single todo  to server
DELETE ::  /api/todos/:todo_id     ::Delete a single todo to server

NOTE:
req=== request
res=== responds


*/


//load mongoose data models
var Todo = require('./models/todo');


module.exports = function(app) {

	// SPApplication -------------------------------------------------------------
	app.get('*', function(req, res) {
	    // load the single view file (angular will handle the page changes on the front-end)
		res.sendfile('./public/index.html');
	});





// api ---------------------------------------------------------------------
//GET ALL todos//////////////

	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});




//CREATE//////////////////
// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});


//DELETE//////////////////
// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			Todo.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});




};








/*
// Grab 'User' model so CRUD API can manipulate it
var User = require('../models/model').User;

// Create-------------------------------------------------
exports.create = function(req, res) {

	User.create({userName: req.body.userName},
		function(err, users) {
			if (!err) {
				res.send(users);
			} else if (err) {
				res.send(err);
			}
		}
	);
}

// Read	-----------------------------------------------
exports.read = function(req, res) {

	User.find(function(err, users) {
		if (!err) {
			res.send(users);
		} else if (err) {
			res.send(err);
		}
	});
}

// Update----------------------------------------------
exports.update = function(req, res) {

	User.findById(req.params._id, function(err, users) {
		users.userName = req.body.userName;
		console.log(users);
		users.save(function() {
			if (!err) {
				res.send(users);
			} else if (err) {
				res.send(err);
			}
		});
	});
}

// Delete-------------------------------------------------
exports.delete = function(req, res) {

	User.remove({_id: req.params._id}, function(err, users) {
		if (!err) {
			res.send(users);
		} else if (err) {
			res.send(err);
		}
	});
}

*/