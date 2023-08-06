

const options = {
  basic: {
    abortEarly: false,
    convert: true,
  },
  array: {
    abortEarly: false,
    convert: true,
  },
};

module.exports = schema => (req, _res, next) => {
  Object.keys(schema).forEach(key => {
    const { error } = schema[key].validate(req[key], options);
    if (error) {
      const message = error.details[0].message || 'Invalid inputs';
      const response = error.details[0];
      return _res.status(400).json({ success: false, message: message, data: response }); 
    }
  });

  next();
};
