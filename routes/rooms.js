const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Room = require('../models/room');

// Rooms index
router.get('/', (req, res, next) => {

});

// Rooms new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('rooms/new');
});

// Rooms show
router.get('/:id', auth.requireLogin, (req, res, next) => {

});

// Rooms edit
router.get('/:id/edit', auth.requireLogin, (req, res, next) => {

});

// Rooms update
router.post('/:id', auth.requireLogin, (req, res, next) => {

});

// Rooms create
router.post('/', auth.requireLogin, (req, res, next) => {

});

module.exports = router;
