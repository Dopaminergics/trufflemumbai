const { mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `wss://laughing-kepler:lather-donut-babble-canal-antler-catchy@ws-nd-021-205-214.p2pify.com`),
      network_id: 80001,       // Ropsten's id
      // gas: 2000000,        // Ropsten has a lower block limit than mainnet
      // gasPrice: 11,
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 50,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true,     // Skip dry run before migrations? (default: false for public nets )
      // networkCheckTimeout: 1000000,
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
