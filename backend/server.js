const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./models');
db.mongoose
  .connect(db.url, {
	  useNewUrlParser: true,
	  useUnifiedTopology: true
  })
  .then(() => {
	  console.log("Connected to the database!");
  })
  .catch(err => {
	  console.log("Cannot connect to the database!", err);
	  process.exit();
  });

require('./routes/todo.routes')(app);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Connected to port: ${PORT}`);
});
