import { Body, Controller, Post, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response } from 'express';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(
		@Body() _body: { to: string; name: string;subject: string; body: string },
		@Res() res: Response,
		): Promise<void> {
    const { to, name,subject, body } = _body;
    await this.emailService.sendEmail(to, name,subject, body);
    // Submit a successful response
    res.status(200).json({ message: 'Mail sent successfully' });
  }
}
