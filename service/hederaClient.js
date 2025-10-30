const { Client } = require('@hashgraph/sdk');

function getHederaClient() {
  const network = process.env.HEDERA_NETWORK || 'testnet';
  const client = Client.forName(network);
  client.setOperator(process.env.HEDERA_OPERATOR_ID = '0.0.7154742', process.env.HEDERA_OPERATOR_KEY = '0xcd27534c469bddfd6a53a6afdfd4855fc7acb921ebf9d311958d5ee00a1381da');
  return client;
}

module.exports = { getHederaClient };
