// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
//import helper from 'helper.js';

const fs = require('fs');
const {MerkleTree} = require("merkletreejs");
const keccak256 = require("keccak256");
const {expectRevert, time} = require('@openzeppelin/test-helpers');

//npx hardhat run --network bsc_test scripts/stake.js
//npx hardhat run --network avax scripts/trans.js
//npx hardhat run --network heco_test scripts/whitelist.js
// //npx hardhat run --network ropsten scripts/stake.js
//npx hardhat run  scripts/whitelist.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');


    accounts = await web3.eth.getAccounts()
    console.log("accounts 0:", accounts[0])
    const AirDrop = await hre.ethers.getContractFactory("InvitePool");
    const invitePool = await AirDrop.deploy();
    await invitePool.deployed();
    console.log("invitePool deployed to:", invitePool.address);

    // const leaves = accounts.map((v) => keccak256(v));
    // const tree = new MerkleTree(leaves, keccak256, {sort: true});
    // const root = tree.getHexRoot();
    // console.log("root",root);
    // const WhitelistSale = await hre.ethers.getContractFactory("WhitelistSale");
    // const whitelistSale = await WhitelistSale.deploy(root);
    // await whitelistSale.deployed();
    // console.log("WhitelistSale deployed to:", whitelistSale.address);
}

// BSC:
//     测试网络：
// https://nd-562-569-637.p2pify.com/b3dafc5cd26a42fb478148715fbb48ed
//     wss://ws-nd-562-569-637.p2pify.com/b3dafc5cd26a42fb478148715fbb48ed
//         主网:
//             https://nd-371-554-258.p2pify.com/67873127b26f02bfaf2a036c6a02b9b5
//                 wss://ws-nd-371-554-258.p2pify.com/67873127b26f02bfaf2a036c6a02b9b5
//                     ETH:
//                         主网:
//                             https://nd-334-565-972.p2pify.com/b9c9354ae6cb822ab2b8504ce712960f
//                                 wss://ws-nd-334-565-972.p2pify.com/b9c9354ae6cb822ab2b8504ce712960f

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
