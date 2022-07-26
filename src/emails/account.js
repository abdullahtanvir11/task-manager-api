const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'f2019266268@umt.edu.pk', 
        subject: 'Thanks for Joining in!',
        text: `Welcome to the app ${name}. Hope you will enjoy using the app :)`
    })
}

const sendCancelationEmail = (email,name) =>{
    sgMail.send({
        to: email,
        from: 'f2019266268@umt.edu.pk', 
        subject: 'Cancelation Alert!',
        text: `You are successfully unsubscribed ${name}! Do let us know why you left and if we can do anything to keep you onboard. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}