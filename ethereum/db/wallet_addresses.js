const Web3 = require('web3');
const EthUtil = require('ethereumjs-util');

const PORT = 8545;
const web3 = new Web3(new Web3.providers.HttpProvider(`http://localhost:${PORT}`));


// Wallet address helper functions

const hexToBytes = (hex) => {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.substr(c, 2), 16));
  }
  return bytes;
};

const privateKeyToAddress = privateKey =>
  `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`;


const mint = {
  balance: web3.toWei(1000000000, 'ether'),
  secretKey: web3.sha3('InGodWeTrust'),
};

const mintWallet = privateKeyToAddress(mint.secretKey.substr(2, 64));

const userWallets = [];
const projectWallets = [];
const userKeys = [mint];
const projectKeys = [];

for (let i = 0; i < 100; i += 1) {
  userWallets.push({
    profile_id: (i > 0 && i < 11) ? i : -1,
    wallet_address: privateKeyToAddress(web3.sha3(`userPrivateKey${i}`).substr(2, 64)),
  });
  projectWallets.push({
    project_id: (i >= 0 && i < 10) ? i : -1,
    wallet_address: privateKeyToAddress(web3.sha3(`projectPrivateKey${i}`).substr(2, 64)),
  });
  userKeys.push({
    balance: web3.toWei(0, 'ether'),
    secretKey: web3.sha3(`userPrivateKey${i}`),
  });
  projectKeys.push({
    balance: web3.toWei(0, 'ether'),
    secretKey: web3.sha3(`projectPrivateKey${i}`),
  });
}

module.exports = {
  userWallets,
  projectWallets,
  userKeys,
  projectKeys,
  mintWallet,
};
