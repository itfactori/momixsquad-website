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
  const { name, email, subject, category, message } = body;

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }

  const recipientEmail = process.env.CONTACT_EMAIL || 'info@momixsquad.com';
  const fullSubject = `Contact Form: ${subject}${category ? ` (${category})` : ''}`;

  const emailHtml = `
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
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 8px 0 0;">From the Momix Squad website</p>
          </div>

          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${escapeHtml(name)}</div>
          </div>

          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${escapeHtml(email)}</div>
          </div>

          ${
            category
              ? `
          <div class="field">
            <div class="label">Category:</div>
            <div class="value">${escapeHtml(category)}</div>
          </div>
          `
              : ''
          }

          <div class="field">
            <div class="label">Subject:</div>
            <div class="value">${escapeHtml(subject)}</div>
          </div>

          <div class="field">
            <div class="label">Message:</div>
            <div class="value" style="white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>

          <div class="footer">
            <p>This email was sent from the Momix Squad contact form.</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
${category ? `Category: ${category}\n` : ''}Subject: ${subject}

Message:
${message}

---
This email was sent from the Momix Squad contact form.
Submitted at: ${new Date().toLocaleString()}
  `.trim();

  const { data, error } = await resend.emails.send({
    from: 'Momix Squad <onboarding@resend.dev>',
    to: recipientEmail,
    replyTo: email,
    subject: fullSubject,
    html: emailHtml,
    text: emailText
  });

  if (error) {
    console.error('Resend error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    });
  }

  return {
    success: true,
    message: 'Thank you for your message! We will get back to you soon.',
    id: data?.id
  };
});
