const dbConfig = require('../db/db.config.js');
const model = require('./todo.model.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.todos = require('./todo.model.js');

//old code:
//db.todor = require(./todo.model.js')(mongoose);
//This is probably written this way, because the old fix in todo.model.js is this:
//module.exports = mongoose => { return Todo };
//
//which is a function, so it needs to be exported as a function.
//However, since it is now a variable and i have already written module.exports
//on the mongoose.model(), then I just have to require('./todo.model.js');
module.exports = db;
