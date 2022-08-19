// https://eth-goerli.g.alchemy.com/v2/ikk9R0kUIh84L5N23qkIp-7GTMYgJVXo

const { defaultAccounts } = require("ethereum-waffle");

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ikk9R0kUIh84L5N23qkIp-7GTMYgJVXo",
      accounts: [
        "fc7b11261ce5b20a42472897a5dc4ba00e11ec21e4393699d69ca720ddc24608",
      ],
    },
  },
};
