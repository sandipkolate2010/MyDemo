require('rootpath')();
var express = require('Express');
var app = express();

const cors = require('cors');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const jwtCheck = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

var users = require('./routes/users.js');
var authenticate = require('./routes/authenticate.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(jwtCheck());



app.use('/users', users);
app.use('/authenticate', authenticate);

app.use(errorHandler);

app.listen(5000, () => console.log('Server started on port 5000'));