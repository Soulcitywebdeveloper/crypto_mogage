# Crypto Mogage Marketplace

A financial toolkit and marketplace for mortgaging on cryptocurrency, leveraging the Hedera Hashgraph network. Built with Node.js, Express, and MongoDB, with modular support for user and product management, crypto-backed mortgages, market orders, and more.

## Features
- Hedera integration for secure crypto operations
- Express.js RESTful API, ready for scaling
- MongoDB data models for users, products, mortgages, and orders
- Marketplace with order/payment status tracking
- Example environment configs for dev/test/prod
- Validation schemas for robust API input
- Modular directory structure for extended maintainability

## Directory Structure
```
service/      # Main Express app, Hedera SDK integration
models/       # MongoDB schema definitions: User, Product, Mortgage, Order...
routes/       # Express route modules (API endpoints)
tests/        # Jest/Supertest-based integration tests
```

## Environment Setup
Copy and modify the provided `.env.*` templates as needed for your environment:
```
PORT=3000
HEDERA_NETWORK=testnet
HEDERA_OPERATOR_ID=0.0.xxxxxx
HEDERA_OPERATOR_KEY=...
DATABASE_URL=mongodb://localhost:27017/crypto_mogage_dev
```

## Install and Run
1. **Install Node and MongoDB** if you haven't already.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start in development mode:
   ```bash
   npm run dev
   ```
   Or for production:
   ```bash
   npm start
   ```

## Running Tests
```bash
npm test
```

## API Overview
Basic route is `/api/marketplace`, e.g. `/api/marketplace/balance/:accountId` for Hedera integration samples. Extend with user, product, mortgage, and order endpoints as needed.

## Extending
- Add more routes/controllers in `routes/`
- Define business logic in `service/`
- Expand data models in `models/`
- Write automated tests in `tests/`

## Dependencies
- express
- @hashgraph/sdk
- mongoose
- dotenv, cross-env, nodemon
- jest, supertest
- joi (for schema validation)

## License
MIT

