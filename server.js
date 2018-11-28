const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('./config/database');
require('dotenv').config();

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require('method-override')('_method'));

// define routes below
// example: app.use('/api/fish', require('./routes/api'));

// catch all route for react must come AFTER all other routes
app.get('*', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});