const Imap = require('imap')
const Nodemailer = require('nodemailer')

export async function Emailer({firstName, lastName, fromEmail, toEmail,   }){

    let imap = new Imap({
        user: 'spy@gmail.com',
        password: 'password',
        host: 'host',
        port: 'port',
        tls: true,
    })

    imap.connect();

    let transport = Nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });


}
