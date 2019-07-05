const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');
var mongoose = require('mongoose');


var router = express.Router();
const Users = require('../model/users');

router.use(cors());
router.use(bodyParser.json());

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/*+json' }));


mongoose.connect('mongodb://localhost:27017/foodcourt', { useNewUrlParser: true });

router.get('/vendors', function (req, res) {
    Users.find({ "role": "vendor" }, function (err, users) {
        if (err)
            res.send(err);
        else {
            res.json(users);
        }
    });
});

router.get('/vendors/:id', function (req, res) {
    Users.find({ "role": "vendor", "_id": req.params.id }, function (err, user) {
        if (err)
            res.send(err);
        else {
            res.json(user);
        }
    });
});

router.put('/save/:id', function (req, res, next) {
    // var user = new Users({
    //     "vendorname": req.body.vendorname, "firstname": req.body.firstname, "lastname":
    //         req.body.lastname, "email": req.body.email, "address": req.body.address, "contact": req.body.contact, "password": req.body.password, "user": req.body.user, "role": req.body.role
    // })
    // Users.findByIdAndUpdate(
    //     req.params.id,
    //     req.body,
    //     {new: true},
    //     function (err, users) {
    //     if (err) {
    //         res.send(err);
    //     } else {
    //         res.json(users);
    //     }
    // });

    Users.updateOne(
        {'_id': req.params.id},
        {$set: req.body},
        // {new: true},
        function (err, users) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

router.post('/save', function (req, res) {
    var user = new Users({
        "vendorname": req.body.vendorname, "firstname": req.body.firstname, "lastname":
            req.body.lastname, "email": req.body.email, "address": req.body.address, "contact": req.body.contact, "password": req.body.password, "user": req.body.user, "role": req.body.role
    })
    user.save(function (err, users) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

router.post('/register', function (req, res) {
    var user = new Users({
        "vendorname": req.body.vendorname, "firstname": req.body.firstname, "lastname":
            req.body.lastname, "email": req.body.email, "address": req.body.address, "contact": req.body.contact, "password": req.body.password, "user": req.body.user, "role": req.body.role
    })
    user.save(function (err, users) {
        if (err) {
            res.send(err);
        } else {
            res.json(users);
        }
    });
});

module.exports = router;