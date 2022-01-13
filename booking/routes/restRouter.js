const express = require('express');
const router = express.Router();

var roomsController = require('../controllers/rooms');
var seatsController = require('../controllers/seats');

router.get('/rooms', roomsController.get_rooms);

router.get('/seats', seatsController.get_seats);

// seats:id

module.exports = router;
