const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */

    networks: {
        development: {
            host: '127.0.0.1', // Localhost (default: none)
            port: 7545, // Standard Ethereum port (default: none)
            network_id: '*', // Any network (default: none)
        },
        goerli: {
            provider: () => {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://goerli.infura.io/v3/${process.env.INFURA}`
                );
            },
            network_id: '5', // eslint-disable-line camelcase
            gas: 4465030,
            gasPrice: 10000000000,
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(
                    process.env.MNEMONIC,
                    `https://rinkeby.infura.io/v3/${process.env.INFURA}`
                );
            },
            network_id: 4,
        },
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.6.8', // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            // settings: {          // See the solidity docs for advice about optimization and evmVersion
            //  optimizer: {
            //    enabled: false,
            //    runs: 200
            //  },
            //  evmVersion: "byzantium"
            // }
        },
    },
};
