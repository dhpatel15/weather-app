const controller = require('./controllers');
const router = require('express').Router();

router.get('/api/getWeather', controller.getWeather.get);


module.exports = router;