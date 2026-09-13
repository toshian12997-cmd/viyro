# Vero

A glassmorphism-first business workspace for recording real business activity and turning it into clear, actionable information.

## Current build

- Animated Vero loader with the V mark, businessman and briefcase sequence
- Login and account creation flow
- Protected application view after local sign-in
- Empty-by-default business workspace
- Transactions: income and expense recording
- Customers and products/services
- Invoice drafts
- Financial reports with print/save-to-PDF support
- Search across recorded workspace records
- Notifications surface
- Settings and light/dark appearance
- Responsive mobile navigation layout
- Reduced-motion accessibility support
- Local persistence so records survive refreshes

## Run

```bash
npm install
npm run dev
```

The Vite server is configured for port `5173` and host `0.0.0.0`, which is suitable for Codespaces port forwarding.

## Production note

The current repository is a functional frontend/workspace foundation using browser storage. Before handling real customer or financial data in production, connect the authentication, database, payment and email/OTP flows to a secure backend/provider and move secrets out of the client.
