# EmailJS Setup Instructions

## What is EmailJS?
EmailJS is a service that allows you to send emails directly from client-side JavaScript without needing a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Please respond within 24 hours.

Best regards,
U.S. Affordable Housing LLC
```

4. Save the template and note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** in the API Keys section

### 5. Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_PUBLIC_KEY` with your actual public key
   - `YOUR_SERVICE_ID` with your actual service ID
   - `YOUR_TEMPLATE_ID` with your actual template ID

### 6. Test the Forms
1. Start your development server: `npm run dev`
2. Go to your website and test both contact forms
3. Check your email to confirm messages are being received

## Free Plan Limits
- 200 emails per month
- 2 email services
- 2 email templates

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for error messages
- Verify your email service is properly configured
- Test with a simple email first

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
