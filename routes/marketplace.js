const express = require('express');
const { Client, AccountBalanceQuery } = require('@hashgraph/sdk');
const router = express.Router();

// Setup Hedera client using env
function getHederaClient() {
  const network = process.env.HEDERA_NETWORK || 'testnet';
  const client = Client.forName(network);
  client.setOperator(process.env.HEDERA_OPERATOR_ID, process.env.HEDERA_OPERATOR_KEY);
  return client;
}

// Sample route: get account balance
router.get('/balance/:accountId', async (req, res) => {
  try {
    const client = getHederaClient();
    const accountId = req.params.accountId;
    const balance = await new AccountBalanceQuery().setAccountId(accountId).execute(client);
    res.json({ accountId, hbars: balance.hbars.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Placeholder for mortgage-related routes
router.get('/', (req, res) => {
  res.send('Marketplace API root - Mortgage on Crypto');
});

module.exports = router;
