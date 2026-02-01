import { Resend } from 'resend';

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m] || m);
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event);
  const apiKey = config.resendApiKey || process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured. Please set RESEND_API_KEY environment variable.'
    });
  }

  const resend = new Resend(apiKey);
  const body = await readBody(event);
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A valid email address is required.'
    });
  }

  const recipientEmail = process.env.CONTACT_EMAIL || 'info@momixsquad.com';

  const welcomeHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899, #a855f7); padding: 30px; border-radius: 12px 12px 0 0; color: white; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #f3f4f6; }
          .footer { background: #fdf2f8; padding: 20px; border-radius: 0 0 12px 12px; text-align: center; font-size: 12px; color: #9ca3af; }
          .highlight { color: #ec4899; font-weight: bold; }
          ul { padding-left: 20px; }
          li { margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Welcome to Momix Squad!</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Empowering Mothers, Together</p>
          </div>
          <div class="content">
            <p>Assalamu Alaikum! 🌸</p>
            <p>Thank you for joining the <span class="highlight">Momix Squad</span> community! We're so glad to have you with us.</p>
            <p>Here's what you can look forward to:</p>
            <ul>
              <li><strong>Weekly Tips</strong> — Practical advice for every stage of motherhood</li>
              <li><strong>Exclusive Resources</strong> — Self-assessments, wellness tools, and guides</li>
              <li><strong>Community Updates</strong> — Events, stories, and inspiration from fellow moms</li>
              <li><strong>Islamic Guidance</strong> — Faith-based parenting wisdom and du'a collections</li>
            </ul>
            <p>In the meantime, explore our resources at <a href="https://momixsquad.com" style="color: #ec4899;">momixsquad.com</a></p>
            <p>With love and du'as,<br><strong>The Momix Squad Team</strong></p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Momix Squad. All rights reserved.</p>
            <p>You received this email because you subscribed to our newsletter.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const welcomeText = `
Welcome to Momix Squad!

Assalamu Alaikum!

Thank you for joining the Momix Squad community! We're so glad to have you with us.

Here's what you can look forward to:
- Weekly Tips — Practical advice for every stage of motherhood
- Exclusive Resources — Self-assessments, wellness tools, and guides
- Community Updates — Events, stories, and inspiration from fellow moms
- Islamic Guidance — Faith-based parenting wisdom and du'a collections

In the meantime, explore our resources at https://momixsquad.com

With love and du'as,
The Momix Squad Team
  `.trim();

  const notificationHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #ec4899, #a855f7); padding: 20px; border-radius: 12px; margin-bottom: 20px; color: white; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; padding: 10px; background-color: #f9f9f9; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Newsletter Subscriber</h2>
            <p style="margin: 8px 0 0;">From the Momix Squad website</p>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${escapeHtml(email)}</div>
          </div>
          <div class="field">
            <div class="label">Subscribed at:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  const [welcomeResult, notificationResult] = await Promise.all([
    resend.emails.send({
      from: 'Momix Squad <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Momix Squad! 🌸',
      html: welcomeHtml,
      text: welcomeText
    }),
    resend.emails.send({
      from: 'Momix Squad <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New Newsletter Subscriber: ${email}`,
      html: notificationHtml,
      text: `New newsletter subscriber: ${email}\nSubscribed at: ${new Date().toLocaleString()}`
    })
  ]);

  if (welcomeResult.error || notificationResult.error) {
    console.error('Resend error:', welcomeResult.error || notificationResult.error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to process subscription'
    });
  }

  return {
    success: true,
    message: "You're subscribed! Check your inbox for a welcome email."
  };
});
