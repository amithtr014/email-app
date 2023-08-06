const userService = require("../services/userService");


module.exports.saveMailSettings = async (req, res) => {
  console.log("Inside saveMailSettings:", req.body)
  try {

        await userService.saveSettings(req.body);

        return res.status(201).json({ success: true, message: "Settings saved successfully", data: {} });  
   
  } catch (err) {

    return res.status(500).json({ success: false, message: "Something went wrong !", data: err });
  }
};



module.exports.sendMail = async (req, res) => {
  console.log("Inside sendMail:", req.body)
  try {

        await userService.sendMail(req.body);

        return res.status(201).json({ success: true, message: "Send successfully", data: {} });  
   
  } catch (err) {

    return res.status(500).json({ success: false, message: "Something went wrong !", data: err });
  }
};
