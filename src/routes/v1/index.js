const express = require('express');

const { InfoController } = require('../../controllers');

const router = express.Router();

router.get('/info', InfoController.info);
const bookingRoutes = require('./booking');


// const express = require('express');

router.use('/bookings', bookingRoutes);

module.exports = router;