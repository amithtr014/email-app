const Joi = require('joi');

exports.saveMailSettingsSchema = {
  body: Joi.object().keys({
    fromName: Joi.string().trim().required().label('fromName'),
    fromEmail: Joi.string().trim().required().label('fromEmail'),
    userName: Joi.string().trim().required().label('userName'),
    password: Joi.string().trim().required().label('password'),
    smtpHost: Joi.string().required().label('smtpHost'),
    smtpPort: Joi.string().required().label('smtpPort'),
    smtpType: Joi.string().allow('').optional().label('smtpType'),
    messagePerDay: Joi.number().required().label('messagePerDay'),
    minimumTimeGap: Joi.number().required().label('minimumTimeGap'),
  }),
};

exports.sendMailSchema = {
  body: Joi.object().keys({
    to: Joi.string().trim().required().label('to'),
    subject: Joi.string().trim().required().label('subject'),
    body: Joi.string().trim().required().label('body'),

  }),
};
