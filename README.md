# How to Create an ERC-20 Token (4 Steps) 

Table of Contents
  Why build your Own ERC-20 token?
  What is ERC-20?
  How to create your own ERC-20 tokens

This tutorial will teach you how to create your own ERC-20 token on Ethereum’s Goerli testnet using Alchemy, MetaMask, HardHat, and Solidity code snippets. At the end of this tutorial, you will be able to deploy your own ERC-20 token smart contract. The estimated time to complete this guide is 15 minutes.

## important! Configure and know how to use Hardhat OR Sepolia testnet 

npm init 
npm i hardhat 
npm i dotenv 
touch .env
npx hardhat init —> initialize JAVASCRIPT project YES, .gitignore YES, hardhat.config file

**hardhat.config.js**  FILE:
ADD 
**require("@nomicfoundation/hardhat-toolbox")
require("dotenv")**.**config()**

ADD 
`networks` flag, 
`url`: Alchemy RPC url, or Infura
`accounts`: testnet private key

networks: {
  hardhat: {},
  sepolia: {
    url: `${ALCHEMY_SEPOLIA_API_URL}`,
    accounts: [`0x${PRIVATE_KEY}`]
    },
  goerli: {
  	url: `${process.env.ALCHEMY_GOERLI_URL}`,
   	accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`]
   }
}

THEN 
contracts: write your .sol smart contract 

THEN 
scripts: write deploy.js 
npx hardhat compile

THEN 
run local network node: 
npx hardhat node
npx hardhat run scripts/deploy.js 

OR 
npx hardhat run scripts/deploy.js --network sepolia


source: https://docs.alchemy.com/docs/how-to-create-an-erc-20-token-4-steps 
