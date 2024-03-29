/** @type import('hardhat/config').HardhatUserConfig */

require("dotenv").config() //all the key value pairs are being made available due to this lib
require("@nomicfoundation/hardhat-toolbox")

const { ALCHEMY_SEPOLIA_API_URL, PRIVATE_KEY } = process.env

module.exports = {
	solidity: {
		version: "0.8.24",
		settings: {
			optimizer: { enabled: true, runs: 200 }
		}
	},
	defaultNetwork: "localhost",
	networks: {
		hardhat: {},
		sepolia: {
			url: `${ALCHEMY_SEPOLIA_API_URL}`,
			accounts: [`0x${PRIVATE_KEY}`]
		}
		// goerli: {
		// 	url: `${process.env.ALCHEMY_GOERLI_URL}`,
		// 	accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`]
		// }
	}
}
