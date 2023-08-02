const express = require('express');

const { InfoController, BookingController } = require('../../controllers');

const router = express.Router();

router.get('/info', InfoController.info);
const bookingRoutes = require('./booking');


// const express = require('express');

router.use('/bookings', bookingRoutes);
router.post(
    '/payments',
    BookingController.makePayment
);

module.exports = router;