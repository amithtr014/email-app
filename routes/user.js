const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

const {
  validationMiddleware
} = require('../middlewares');

const {saveMailSettingsSchema, sendMailSchema} = require('../validations/schemas');

router.post('/save-mail-settings',  validationMiddleware(saveMailSettingsSchema), userController.saveMailSettings);

router.post('/send-mail', validationMiddleware(sendMailSchema), userController.sendMail);


module.exports = router;