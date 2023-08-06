const nodemailer = require('nodemailer');



module.exports.send = async (data, settings) => {
  try{

     const poolConfig = {
        pool: true,
        host: settings.smtpHost,
        port: settings.smtpPort,
        auth: {
            user: settings.userName,
            pass: settings.password
        },
        secureConnection: false,
        tls: { ciphers: 'SSLv3',  rejectUnauthorized: false }
    }

    const transporter = nodemailer.createTransport(poolConfig);


    const mailOptions = {
        from: `${settings.fromName} <${settings.fromEmail}>`,
        to: data.to,
        subject: data.subject,
        html: data.body
    }

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  }catch(e){
    console.log("Email failed",e)
  }
}

