import EmailTemplate from '@/emails/EmailTemplate'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.forwardemail.net',
  port: 465,
  secure: true,
  auth: {
    user: 'my_user',
    pass: 'my_password',
  },
})

const emailHtml = render(<EmailTemplate url="https://ashmif.com" />)

const options = {
  from: 'you@example.com',
  to: 'user@gmail.com',
  subject: 'hello world',
  html: emailHtml,
}

await transporter.sendMail(options)
