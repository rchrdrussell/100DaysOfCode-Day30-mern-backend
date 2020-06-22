module.exports = app => {
	const todo = require('../controllers/todo.controllers.js');
	var router = require('express').Router(); //The same as express.Router();

	//Get list
	router.get('/', todo.findAll);
	//Get list by id
	router.get('/:id', todo.findOne);
	//Post a new list
	router.post('/add', todo.create);
	//Update list by id
	router.post('/update/:id', todo.updateById);

	app.use('/todo', router);
};
