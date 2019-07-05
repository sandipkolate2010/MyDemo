const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
var mongoose = require('mongoose');
const config = require('config.json');
var router = express.Router();
const Users = require('../model/users');

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/*+json' }));


mongoose.connect('mongodb://localhost:27017/foodcourt', {useNewUrlParser: true});

router.post('/', (req, res) => {
    if (req.body) {
      var user = req.body;
      Users.find({'user':req.body.user, 'role': req.body.role}, function (err, users) {
        if (err || !users.length){
            res.status(403).send({
              errorMessage: 'Please provide valid user and password'
            });
          } else {
        if (users[0].role==req.body.role && users[0].password == req.body.password) {
            var token = jwt.sign(user, config.secret);
            res.status(200).send({
              signed_user: user,
              token: token
            });
          } else {
            res.status(403).send({
              errorMessage: 'Authorisation required!'
            });
          }
        }
        });
    } else {
      res.status(403).send({
        errorMessage: 'Please provide user and password'
      });
    }
   
  });

module.exports = router;