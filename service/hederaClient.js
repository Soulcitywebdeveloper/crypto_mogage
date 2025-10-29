const { Client } = require('@hashgraph/sdk');

function getHederaClient() {
  const network = process.env.HEDERA_NETWORK || 'testnet';
  const client = Client.forName(network);
  client.setOperator(process.env.HEDERA_OPERATOR_ID, process.env.HEDERA_OPERATOR_KEY);
  return client;
}

module.exports = { getHederaClient };
