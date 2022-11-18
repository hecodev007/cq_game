// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {ethers} = require("_hardhat@2.9.6@hardhat");
//npx hardhat run   --network heco_test scripts/recharge.js
//npx hardhat run   --network bsc_test scripts/recharge.js
// npx hardhat run   --network bsc_mainnet scripts/mainnet/recharge.js
//npx hardhat run  scripts/recharge.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
    // tokens = []
    // for (let i = 0; i < 3; i++) {
    //     const UsToken = await hre.ethers.getContractFactory("UsToken");
    //     const us = await UsToken.deploy("MET", "MET");
    //
    //     await us.deployed();
    //
    //     console.log("MET deployed to:", us.address);
    //     tokens[i] = us.address;
    // }
    // met_ = tokens[2]
    // await us.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6",web3.utils.toWei("10000","ether"))

    // We get the contract to deploy
    accounts = await web3.eth.getAccounts();
    busd_ = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
    egc_ = "0xEf1Db65b04ABB6E6d9A1870BeF0B0197eF3121a2"
    nft_addr = "0x48105a0fCcDB4D0347C015E9c3c17AF5591f7A10"
   stake_addr = "0x4E6D02bbC86aA068992bC457bC865800164c2105"
  //  const UsToken = await hre.ethers.getContractFactory("UsToken");
    // _total = "100000000000000000000000000";
    // const met = await UsToken.deploy("MET", "MET",_total);
    // await met.deployed();
    // console.log("MET deployed to:", met.address);
    // met_ = met.address;
    met_  = "0x505CE1F97cD05518F97a4921ee3C3d66fE160d3b"
    tokens = [busd_, egc_, met_]
    const Recharge = await hre.ethers.getContractFactory("Recharge");
    const recharge = await Recharge.deploy(tokens);
    await recharge.deployed();
    console.log("recharge deployed to:", recharge.address);
    const dsgNft = await ethers.getContractAt("DsgNft", nft_addr);
    recharge_ = recharge.address
    tx = await dsgNft.setPveWallet(recharge_);
    console.log(tx.hash.toString())

    // const stealPool = await hre.ethers.getContractFactory("Recharge");
    // const steal = await stealPool.deploy(tokens);
    // await steal.deployed();
    // console.log("steal deployed to:", steal.address);
    // const activityPool = await hre.ethers.getContractFactory("Recharge");
    // const activity = await activityPool.deploy(tokens);
    // await activity.deployed();
    // console.log("activity deployed to:", activity.address);

    const stakePool = await ethers.getContractAt("NftEarnErc20Pool", stake_addr);
    tx = await  stakePool.setStealPool(recharge_);
    console.log(tx.hash.toString())



    tx = await  stakePool.setActivityPool(recharge_);
    console.log(tx.hash.toString())




    // for(let i=0;i<3;i++){
    //     const token = await ethers.getContractAt("UsToken", tokens[i]);
    //     tx = await token.transfer("0x738cc80218db9DAbDd769488cce66516C86BC330",web3.utils.toWei("10000","ether"));
    //     console.log(tx.hash.toString())
    // }


    // const met = await ethers.getContractAt("UsToken", met_);
    // // const recharge = await ethers.getContractAt("Recharge", "0x5e18fBa03C49B01974F7029FfD6b724146E7f68d");
    // tx = await met.approve(recharge.address, web3.utils.toWei("1999", "ether"));
    // console.log(tx.hash.toString())
    // tx = await recharge.recharge(web3.utils.toWei("1999", "ether"), met_);
    // console.log(tx.hash.toString())
    // tx = await recharge.withdraw(1, accounts[0], met_, web3.utils.toWei("1999", "ether"))
    // console.log(tx.hash.toString())
}
// CrystalNft deployed to: 0x797EA939046B0ABf9A7029B76e5B2462884B888a
// DsgNft deployed to: 0xC7E58548E6FD2c3153bFb5A8a716A4C9257E84E2
// team_address: 0x246e59bCFE8bd74f9aeAF39b89550189799497fD
// setOperator 0x5518ebd3e7bffa10aa900ba6d2d011fdf110d382d238fd6012333ff9eba0a909
// egc deployed to: 0x8db80746Fe47f9d05A3eC7A9ee08484c71AC25Ec
// busd deployed to: 0x28F33f0Bf7Ea96482ec7d47Fff2aA6bfF09F3C74
// 0xd2bc75fcade5697f73512edc4a1a41bd6155c899dd7450e5fadb8c9922bef6c1
// 0x96c604b1640f68757a3ee07bcaf4e4069ce3f2f1b7a91570966cda0391ece2cb
// 0x9e70d15c03a7e66af65d15e73038759f5ddcfa03fe9c3283d3811129e7fa8540
// 0x7e750d1557530d8de049be5746cc4622d30164bbbae537c70b39f7946257da3e
// nftRewardPool deployed to: 0x9d4815c3daa22F5C182F41179ba95d468D6b38dE
// 0x85abe3140ca86fad7a4e74e45a4cd05f506a78d394678cbcf65da88f6c520651
// invitePool deployed to: 0x22e8aD46E4a264D652893616edc5dC59dB0D006c
// 0x399337acf4c5cc2530cc7bddaed79ad3c9cbf49b9e308b2a2919ffc1cdc7eada
// 0xd793a33e332c74690406597350f9348494ea8f963c12ca84f73b92610c795803
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
