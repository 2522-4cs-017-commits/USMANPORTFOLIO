import nodemailer from 'nodemailer';

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

if (!user || !pass) {
  console.warn('[email] EMAIL_USER or EMAIL_PASS not set in env');
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587, // Try TLS instead of SSL
  secure: false,
  auth: {
    user,
    pass,
  },
});

export async function sendContactEmail({ name, email, message }) {
  try {
    const to = user; // send to the configured inbox
    const subject = `New contact message from ${name}`;
    const text = `Assalam-o-Alaikum,\n\nFrom portfolio website:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}\n\nSent: ${new Date().toLocaleString()}`;

    console.log('[email] Sending email...');
    const info = await Promise.race([
      transporter.sendMail({
        from: user, // use configured email as sender
        replyTo: email, // but set reply-to to user's email
        to,
        subject,
        text,
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 10000)
      ),
    ]);

    console.log('[email] sent:', info && info.messageId);
    return info;
  } catch (err) {
    console.error('[email] sendContactEmail error:', err.message);
    // Don't throw - email failure shouldn't fail the whole request
    return { error: err.message };
  }
}
