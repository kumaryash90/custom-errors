require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: process.env.PROVIDER,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};