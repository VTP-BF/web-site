import nodemailer from 'nodemailer';
import { getServiceRowBySlug, SERVICE_SLUGS } from '../../src/locales/servicesCatalog';

const SERVICE_PALETTE = ['#0066cc', '#27ae60', '#8e44ad', '#16a085', '#c0392b', '#d35400', '#2c3e50'];
const SERVICE_PREFIX = 'service:';

// Create reusable transporter with Zoho SMTP configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST,
    port: parseInt(process.env.ZOHO_SMTP_PORT, 10),
    secure: false, // Use TLS (not SSL)
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_SMTP_PASS,
    },
  });
};

// Topic mapping: Convert topic code to human-readable labels.
// Service topics resolve dynamically from servicesCatalog (slug-prefixed),
// so adding a service automatically updates emails without code changes here.
const getTopicLabel = (topicCode, isEnglish = true) => {
  if (typeof topicCode === 'string' && topicCode.startsWith(SERVICE_PREFIX)) {
    const row = getServiceRowBySlug(topicCode.slice(SERVICE_PREFIX.length));
    if (row) return isEnglish ? row.en.title : row.fr.title;
  }

  const topicMap = {
    info: {
      en: 'Information Request',
      fr: 'Demande d\'information',
    },
    project: {
      en: 'Project Proposal',
      fr: 'Proposition de projet',
    },
  };

  const topic = topicMap[topicCode];
  if (!topic) {
    return isEnglish ? 'General Inquiry' : 'Demande générale';
  }

  return isEnglish ? topic.en : topic.fr;
};

// Get topic color for visual distinction
const getTopicColor = (topicCode) => {
  if (typeof topicCode === 'string' && topicCode.startsWith(SERVICE_PREFIX)) {
    const idx = SERVICE_SLUGS.indexOf(topicCode.slice(SERVICE_PREFIX.length));
    if (idx >= 0) return SERVICE_PALETTE[idx % SERVICE_PALETTE.length];
  }
  const colorMap = {
    info: '#0066cc',
    project: '#27ae60',
  };
  return colorMap[topicCode] || '#0066cc';
};

// Validate required fields
const validateFormData = (data) => {
  const errors = [];

  if (!data.name || data.name.trim() === '') {
    errors.push('Name is required');
  }

  if (!data.email || data.email.trim() === '') {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Email is invalid');
  }

  if (!data.subject || data.subject.trim() === '') {
    errors.push('Subject is required');
  }

  if (!data.message || data.message.trim() === '') {
    errors.push('Message is required');
  }

  return errors;
};

// Format email body with form data and prominent topic display
const formatEmailBody = (data, isEnglish = true) => {
  const topicLabel = getTopicLabel(data.subject, isEnglish);
  const topicColor = getTopicColor(data.subject);

  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <div style="background-color: ${topicColor}; color: white; padding: 20px; border-radius: 5px 5px 0 0; margin: 0;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600;">${escapeHtml(topicLabel)}</h2>
        <p style="margin: 8px 0 0 0; font-size: 14px; opacity: 0.9;">From: ${escapeHtml(data.name)}</p>
      </div>

      <div style="background-color: #f9f9f9; padding: 20px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 5px 5px; margin: 0 0 20px 0;">
        <div style="margin-bottom: 16px;">
          <p style="margin: 0 0 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Details</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #555; width: 100px;"><strong>Name:</strong></td>
              <td style="padding: 6px 0;">${escapeHtml(data.name)}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #555;"><strong>Email:</strong></td>
              <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color: ${topicColor}; text-decoration: none;">${escapeHtml(data.email)}</a></td>
            </tr>
            ${data.phone ? `<tr>
              <td style="padding: 6px 0; color: #555;"><strong>Phone:</strong></td>
              <td style="padding: 6px 0;">${escapeHtml(data.phone)}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 6px 0; color: #555;"><strong>Topic:</strong></td>
              <td style="padding: 6px 0; font-weight: 500; color: ${topicColor};">${escapeHtml(topicLabel)}</td>
            </tr>
          </table>
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <p style="margin: 0 0 10px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</p>
        <div style="background-color: #ffffff; padding: 16px; border-left: 4px solid ${topicColor}; border-radius: 2px; margin: 0;">
          <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
        </div>
      </div>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #999; font-size: 11px; margin: 0;">
        This email was generated automatically from the contact form on your website.
        <br>
        To reply to this message, use the reply-to function to contact ${escapeHtml(data.name)} directly at ${escapeHtml(data.email)}.
      </p>
    </div>
  `;
};

// Escape HTML to prevent injection
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { name, email, phone, subject, message, locale } = req.body;

    // Validate form data
    const validationErrors = validateFormData({ name, email, subject, message });
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        errors: validationErrors,
      });
    }

    // Verify environment variables are set
    if (
      !process.env.ZOHO_SMTP_HOST ||
      !process.env.ZOHO_SMTP_PORT ||
      !process.env.ZOHO_USER ||
      !process.env.ZOHO_SMTP_PASS ||
      !process.env.CONTACT_EMAIL_TO
    ) {
      console.error('[Contact Form] Missing email configuration environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error. Please contact administrator.',
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify connection to SMTP server
    await transporter.verify();

    // Prefer the explicit UI locale sent by the client (router.locale),
    // since the browser's Accept-Language header is OS-driven and won't
    // reflect a runtime FR↔EN switch via the language switcher.
    const isEnglish =
      locale === 'en' ||
      (locale !== 'fr' &&
        req.headers['accept-language']?.includes('fr') !== true);

    // Get topic label for subject line
    const topicLabel = getTopicLabel(subject, isEnglish);

    // Send email
    const mailOptions = {
      from: process.env.ZOHO_USER,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `[VTP Contact] ${topicLabel} from ${escapeHtml(name)}`,
      html: formatEmailBody({ name, email, phone, subject, message }, isEnglish),
    };

    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    // SECURITY: Never log the full error object - it may contain sensitive SMTP details
    // Only log the error type/code for debugging purposes
    console.error('[Contact Form] Submission failed:', error.code || error.message);

    // Determine error type for appropriate response
    if (error.code === 'EAUTH') {
      return res.status(401).json({
        success: false,
        error: 'Authentication failed. Please verify email credentials.',
      });
    }

    if (error.code === 'ECONNREFUSED') {
      return res.status(503).json({
        success: false,
        error: 'Email server connection failed. Please try again later.',
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to send email. Please try again later.',
    });
  }
}
