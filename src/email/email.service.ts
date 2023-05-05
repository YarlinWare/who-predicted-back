import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  async sendEmail(to: string, name: string, subject: string, body: string): Promise<void> {
    // Configure mail transport using nodemailer
    const transporter = nodemailer.createTransport({
      // Configuring the outgoing mail service (SMTP)
      host: 'smtp.gmail.com', // To do
      port: 587,
      secure: false, // set to true for SSL
			// To do
      auth: {
        user: 'info@whopredictedtheweather.com',
        pass: '<password>',
      },
    });

    // Configure the email
    const mailOptions = {
      from: 'info@whopredictedtheweather.com',
      to,
      subject,
      text: `Mail sent by: ${name}, ${body}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions).then(
			response =>(
				console.log(mailOptions)
			)
		);
		return
  }
}
