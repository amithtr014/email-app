

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

module.exports = schema => (req, res, next) => {
  try{
  Object.keys(schema).forEach(key => {
    const { error } = schema[key].validate(req[key], options);
    if (error) {
      const message = error.details[0].message || 'Invalid inputs';
      const response = error.details[0];

      throw new Error(message);
     
      
    }
  });
  next();
 
 }catch(e){

   return res.status(412).send({
        success: false,
        error:e,
        message: 'Invalid inputs',
      });
 }
};
