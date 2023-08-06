const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/save-mail-settings', userController.saveMailSettings);

router.post('/send-mail', userController.sendMail);


module.exports = router;