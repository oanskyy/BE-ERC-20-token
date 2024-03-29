/* eslint-env node */
/* global ethers */
const fs = require("fs")

async function main() {
	const [deployer] = await ethers.getSigners()
	console.log("Oana|DEPLOYER:", deployer)
	console.log("Oana|Deploying contracts with the account address:", deployer.address)

	const accountBalance = await deployer.provider.getBalance(deployer.address)
	console.log("Oana|Account balance:", accountBalance)

	// TO DO: 
	// const weiAmount = (await deployer.getBalance()).toString()
	// console.log(
	// 	"Oana Account balance:",
	// 	await ethers.utils.formatEther(weiAmount)
	// )

	const AiresToken = await ethers.getContractFactory("AiresToken")
	const token = await AiresToken.deploy()
	console.log("Oana Token:", token)
	console.log("Oana Token address/target:", token.target)
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
