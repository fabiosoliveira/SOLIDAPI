import { IMailProvider, IMassage } from './../IMailProvider';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor(){
        this.transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })
    }

    async sendMail(message: IMassage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}