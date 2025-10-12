import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
export const nodemailer_service = {
  async sendConfirmationEmail(email: string, token: string) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });
    // important! chancge for deploy
    const confirmUrl = `${process.env.APP_URL}/confirm?token=${token}`;

    await transporter.sendMail({
      from: `"Talklsy" <${process.env.SMTP_USER!}>`,
      to: email,
      subject: 'Registration confirmation Talklsy',
      html: `
        <h1>Welcome</h1>
        <p>To confirm your email, follow the link:</p>
        <a href="${confirmUrl}">${confirmUrl}</a>
      `,
    });
  },
};
