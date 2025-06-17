const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Debug: Log environment variables (without sensitive data)
console.log('Environment check:', {
  EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not set',
  EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD ? 'Set' : 'Not set',
  PORT: process.env.PORT || 5000
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify(function(error, success) {
  if (error) {
    console.error('Transporter verification failed:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    console.log('Received email request:', {
      to: req.body.to,
      subject: req.body.subject,
      hasHtml: !!req.body.html
    });

    const { to, subject, html } = req.body;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      html
    };

    console.log('Attempting to send email with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    res.status(200).json({ message: 'Email sent successfully', info });
  } catch (error) {
    console.error('Detailed error sending email:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

// Launch announcement endpoint
app.post('/api/send-launch-announcement', async (req, res) => {
  try {
    console.log('Received launch announcement request:', {
      recipientCount: req.body.recipients?.length
    });

    const { recipients } = req.body;

    // Read the email template
    const fs = require('fs');
    const path = require('path');
    const emailTemplate = fs.readFileSync(
      path.join(__dirname, '../src/email-templates/launch-email.html'),
      'utf8'
    );

    console.log('Email template loaded successfully');

    // Send to each recipient
    const sendPromises = recipients.map(async (recipient) => {
      console.log('Preparing to send to:', recipient);
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: recipient,
        subject: 'Portfolio Launch Announcement',
        html: emailTemplate
      };

      try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Successfully sent to:', recipient, info.response);
        return info;
      } catch (error) {
        console.error('Failed to send to:', recipient, error.message);
        throw error;
      }
    });

    const results = await Promise.all(sendPromises);
    console.log('All emails sent successfully');

    res.status(200).json({ 
      message: 'Launch announcements sent successfully',
      results: results.map(r => r.response)
    });
  } catch (error) {
    console.error('Detailed error sending launch announcements:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    res.status(500).json({ 
      error: 'Failed to send launch announcements',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 