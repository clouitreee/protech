# Resend Integration Documentation

This document outlines the Resend integration for the Tech Hilfe Pro NRW website, covering the contact form endpoint, anti-spam measures, and bounce handling.

## 1. Contact Form Endpoint

The `/api/contact` endpoint handles contact form submissions and sends emails via Resend. It includes the following features:

- **`reply_to`**: Sets the `reply_to` header to the customer's email address, allowing for direct replies.
- **Validation**: Validates that the name, email, and message fields are not empty and that the email address is in a valid format.
- **Sanitization**: Sanitizes all input fields to prevent XSS attacks.

## 2. Anti-Spam Measures

The contact form endpoint includes the following anti-spam measures:

- **Rate Limiting**: Limits the number of requests per IP address to 3 per hour. This is a simple in-memory implementation and should be replaced with a more robust solution like Redis in a production environment.
- **Honeypot**: Includes a hidden `honeypot` field in the form. If this field is filled out, the submission is likely from a bot and is silently ignored.
- **Time Trap**: Measures the time it takes to fill out the form. If the form is submitted in less than 3 seconds, the submission is likely from a bot and is silently ignored.

## 3. Bounce Handling

Resend provides webhook events for bounce handling. You should configure a webhook in your Resend account to receive these events and update your customer database accordingly. This will help you maintain a clean email list and improve your deliverability.

**Note:** The contact form handler includes a `TODO` comment where you should add your logic for logging contact form submissions to the `audit_logs` table in your D1 database for GDPR/NIS2 compliance.
