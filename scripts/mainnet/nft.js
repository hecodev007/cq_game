// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
//heco_test
//npx hardhat run --network heco_test scripts/nft.js
//npx hardhat run  scripts/nft.js
//npx hardhat run --network bsc_test scripts/nft.js
//npx hardhat run --network bsc_mainnet scripts/mainnet/nft.js

function formatSecond(second) {
    const days = Math.floor(second / 86400);
    const hours = Math.floor((second % 86400) / 3600);
    const minutes = Math.floor(((second % 86400) % 3600) / 60);
    const seconds = Math.floor(((second % 86400) % 3600) % 60);
    const forMatDate = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
    return forMatDate;
}

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy


    accounts = await web3.eth.getAccounts();
    console.log("hi:",accounts[0]);

    const CrystalNft = await hre.ethers.getContractFactory("CrystalNft");


    const crystalNft = await CrystalNft.deploy();
    await crystalNft.deployed();
    console.log("CrystalNft deployed to:", crystalNft.address);
    //  let team_address =accounts[0];
    let baseURI_ = "https://api.mekawarrior.io/metadata/nft/"
    await crystalNft.initialize("", "", baseURI_);

    const DsgNft = await hre.ethers.getContractFactory("DsgNft");

    const dsgNft = await DsgNft.deploy();
    await dsgNft.deployed();
    console.log("DsgNft deployed to:", dsgNft.address);
    let team_address = "0xCdE96C7a2dEeEB6Ade1cB575F79683bB2080e3f5";
    console.log("team_address:",team_address);
    // let baseURI_ = "www.baidu.com"
    await dsgNft.initialize("MekaWarrior NFT ", "MekaWarrior NFT ", team_address, baseURI_);
    await dsgNft.setCrystalNft(crystalNft.address);

    tx = await crystalNft.setOperator(dsgNft.address);
    console.log("setOperator", tx.hash.toString());


    const NftLockPool = await hre.ethers.getContractFactory("NftLockPool");
    const lock = await NftLockPool.deploy();
    await lock.deployed();
    console.log("lock deployed to:", lock.address);
    tx = await dsgNft.setLockNft(lock.address);
    console.log(tx.hash.toString());
//
//     const UsToken = await hre.ethers.getContractFactory("UsToken");
//     _total = "10000000000000000000000000000";
//     const egc = await UsToken.deploy("EGC", "EGC",_total);
//    // const egc = await UsToken.deploy("Energy Crystal", "EGC");
//     await egc.deployed();
//     console.log("egc deployed to:", egc.address);

    // const BusdToken = await hre.ethers.getContractFactory("UsToken");
    //
    // const busd = await BusdToken.deploy("BUSD", "BUSD",_total.toString());
    // await busd.deployed();
    // console.log("busd deployed to:", busd.address);

    // tx = await egc.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // console.log(tx.hash.toString());

    busd = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
    tx = await dsgNft.setFeeToken("0x0000000000000000000000000000000000000000", busd);
    console.log("setFeeToken",tx.hash.toString());
    tx = await dsgNft.setPrice(web3.utils.toWei("0.0002").toString(), web3.utils.toWei("20").toString());
    console.log("setPrice",tx.hash.toString());


    const NftRewardPool = await hre.ethers.getContractFactory("NftRewardPool");

    const nftRewardPool = await NftRewardPool.deploy( busd,crystalNft.address);
    await nftRewardPool.deployed();
    console.log("nftRewardPool deployed to:", nftRewardPool.address);

    tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    console.log(tx.hash.toString());


    const InvitePool = await hre.ethers.getContractFactory("InvitePool");

    const invitePool = await InvitePool.deploy();
    await invitePool.deployed();
    console.log("invitePool deployed to:", invitePool.address);

    tx = await dsgNft.setInvitePool(invitePool.address);
    console.log(tx.hash.toString());


//     const dsgNft = await ethers.getContractAt("DsgNft", "0x16Af520e38069f02E9E7aFCeb63d1f443AE4F94E");
//     const egc = await ethers.getContractAt("UsToken", "0xFe8c5E2Fadc26e770111d261774d7B509eFBB5A9");
//     const busd = await ethers.getContractAt("UsToken", "0xaBD7cCe008B58fEC0DC38D7331B0102d3DD89Da9");
//     const rewardPool = await ethers.getContractAt("NftRewardPool", "0xEE355136BcaA43351C29f9b1615368266C182510");
//
//
//     ch = await dsgNft.UserChance("0x62C38D3Ee78211FAc9262916FfAf7c5E61110Ec6");
// console.log(ch.toString())
    // start = await rewardPool.startTime();
    // var now = new Date();
    // cur = now.getTime()
    // console.log((cur / 1000).toString(), start.toString())
    // console.log((cur / 1000 - start).toString())
    //
    // weekey = 60 * 60 * 24 * 7
    // console.log("weekey:", weekey.toString())
    // console.log("剩余：", (weekey - (cur / 1000 - start)).toString())
    // console.log(formatSecond(weekey - (cur / 1000 - start)));
    // tx = await  egc.transfer("0x62C38D3Ee78211FAc9262916FfAf7c5E61110Ec6",web3.utils.toWei("100000","ether"));
    // console.log(tx.hash.toString());
    //
    // tx = await  busd.transfer("0x62C38D3Ee78211FAc9262916FfAf7c5E61110Ec6",web3.utils.toWei("100000","ether"));
    // console.log(tx.hash.toString());
   //  team =   await dsgNft._teamWallet();
   //  console.log("team wallet->",team.toString());
   // tx =  await egc.approve(dsgNft.address,web3.utils.toWei("5").toString());
   //  console.log(tx.hash.toString());
   //  tx =  await busd.approve(dsgNft.address,web3.utils.toWei("5").toString());
   //  console.log(tx.hash.toString());
   // tx= await dsgNft.batchMint(accounts[0],5);
   //  console.log("batchMint->",tx.hash.toString());

    // tx =  await  dsgNft.composeNft(2078,2083,7);
    // console.log(tx.hash.toString());


 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
