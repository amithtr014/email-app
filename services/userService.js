const { pool } = require('../models/model');
const emailService = require('./emailService');
const config = require("../config.json");

module.exports.saveSettings = async (body) => {
    try {
        console.log("Inside saveSettings service");
        
        const { fromName, fromEmail, userName, password, smtpHost, smtpPort, smtpType, messagePerDay, minimumTimeGap  }  = body

      
        let sql = `INSERT INTO settings(fromName, fromEmail, userName, password, smtpHost, smtpPort, smtpType, messagePerDay, minimumTimeGap)  VALUES (?,?,?,?,?,?,?,?,?)`;
       
        await pool.query(sql, [fromName, fromEmail, userName, password, smtpHost, smtpPort, smtpType, messagePerDay, minimumTimeGap]);

       
        return true

    } catch (err) {
        throw err;
    }


}


module.exports.sendMail =async(data) => {
    try {
      console.log("Inside sendMail",data)

      // Selecting only latest email settings

     let  sql = `SELECT * FROM settings ORDER BY id DESC limit 1`;
     let  settings = await pool.query(sql);

     const emailSetitings = settings ? settings[0] : {}

      // sending email
      await emailService.send(data, emailSetitings)
    
      return true;


    } catch (err) {
        throw err;
    }


}