const express = require('express');
const router = express.Router();

const auth = require('./helpers/auth');
const Room = require('../models/room');

// Rooms index
router.get('/', (req, res, next) => {

});

// Rooms new
router.get('/new', auth.requireLogin, (req, res, next) => {

});

// Rooms show
