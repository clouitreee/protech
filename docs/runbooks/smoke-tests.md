# Smoke Tests Runbook

This document outlines the smoke tests to be performed to verify the basic functionality of the Tech Hilfe Pro NRW website's API endpoints after deployment or significant changes.

## 1. `/functions/api/db/health` - D1 Health Check

**Purpose**: Verify that the Cloudflare D1 database is accessible and responsive.

**Test Case**: Make a `GET` request to the `/functions/api/db/health` endpoint.

**Expected Result**:
- **Status Code**: `200 OK`
- **Response Body**: A JSON object similar to:
  ```json
  {
    "status": "ok",
    "db": "connected",
    "timestamp": "2023-10-27T10:00:00.000Z"
  }
  ```
- **Headers**: `Cache-Control: no-store` should be present.

**Verification Steps**:
1. Deploy the application to Cloudflare Pages.
2. Access the deployed URL for `/functions/api/db/health` in a browser or use a tool like `curl`.
3. Confirm the status code is 200 and the JSON response indicates `db: "connected"`.
4. Verify the `Cache-Control` header.

## 2. `/api/checkout` - Stripe Checkout Session Creation

**Purpose**: Verify that the Stripe Checkout session can be successfully initiated.

**Test Case**: Make a `POST` request to the `/api/checkout` endpoint with valid `priceId`, `quantity`, and `customerEmail`.

**Expected Result**:
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing `sessionId` and `url` (the Stripe Checkout URL).
- **Stripe Checkout Page**: The returned `url` should lead to a functional Stripe Checkout page displaying the product details and the §19 UStG notice in the `custom_text.submit.message`.
- **No Taxes**: Confirm that no taxes are calculated or displayed on the Stripe Checkout page.

**Verification Steps**:
1. Ensure Stripe API keys are correctly configured in the Cloudflare Dashboard.
2. Use a tool like Postman or a simple frontend form to send a `POST` request to `/api/checkout`.
3. Provide a valid `priceId` (from your Stripe products), `quantity` (e.g., 1), and a test `customerEmail`.
4. Verify the 200 status code and the presence of `sessionId` and `url` in the response.
5. Navigate to the `url` provided in the response and visually confirm the Stripe Checkout page loads correctly, shows the §19 UStG notice, and does not display any tax calculations.

## 3. `/api/contact` - Resend Email Endpoint

**Purpose**: Verify that the contact form can send emails via Resend and that anti-spam measures are active.

**Test Case**: Make a `POST` request to the `/api/contact` endpoint with valid `name`, `email`, and `message`.

**Expected Result**:
- **Status Code**: `200 OK`
- **Response Body**: A JSON object `{ success: true, message: "Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen." }`.
- **Email Delivery**: An email should be received at the `MAIL_FROM` address (configured in Cloudflare Dashboard) with the contact form details, and the `reply_to` header set to the customer's email.
- **Anti-Spam**: 
  - **Rate Limiting**: Subsequent requests from the same IP within the rate limit window should receive a `429 Too Many Requests` response.
  - **Honeypot**: Submitting the form with the `honeypot` field filled should result in a `200 OK` (silent discard) but no email sent.
  - **Time Trap**: Submitting the form too quickly (e.g., < 3 seconds) should result in a `200 OK` (silent discard) but no email sent.

**Verification Steps**:
1. Ensure Resend API key and `MAIL_FROM` are correctly configured in the Cloudflare Dashboard.
2. Send a valid `POST` request to `/api/contact` with test data.
3. Confirm the 200 status code and success message.
4. Check the inbox of the `MAIL_FROM` address for the received email.
5. Test rate limiting by sending multiple requests rapidly.
6. Test honeypot by including a non-empty `honeypot` field in the request body.
7. Test time trap by submitting the form very quickly (simulating a bot).
