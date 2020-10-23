const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'isevbusiness@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'isevbusiness@gmail.com',
        subject: 'We are sad to hear you leaving',
        text: `Hi, ${name}. Sorry to hear you go`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}