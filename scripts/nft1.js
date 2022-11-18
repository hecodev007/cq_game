// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
//heco_test
//npx hardhat run --network heco_test scripts/nft.js
//npx hardhat run  scripts/nft.js
//npx hardhat run --network bsc_test scripts/nft1.js
//npx hardhat run --network bsc_mainnet scripts/nft1.js

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
    // CrystalNft deployed to: 0xAEb7e101fF04b369b259d0339648F2Db0E1E353e
    // DsgNft deployed to: 0xb4BBD78d2064A1faD68f9aCb4AE98a7A634C6E08
    // team_address: 0xCdE96C7a2dEeEB6Ade1cB575F79683bB2080e3f5
    // setOperator 0x61f990913df846e54d4920084c5f949c31cb512d480f5ea0fdf48b11a8d6eb00
    // egc deployed to: 0xf921d1a4AFa2087dD27a0cB096cb1989E47153Ca
    // busd deployed to: 0xe8B62211DBE12B5A59F446F4498d78923157CDFf
    // setFeeToken 0x5b96e33b1114e8abd158889fae5287e08eef71fcd0c48c6897f6da7751eea9d4
    // setPrice 0x2661f0a675256815e2d664fbc3f39485aa0cb5167811fc8bcd70c02a1a936958
    // nftRewardPool deployed to: 0xB7F89BbBb4202635561197d0dacde0A08A7E523A
    // 0x5402229c2f41aa7f4dc7ce844db2b1dfa6e84778403186316218f79d84669aa3
    // invitePool deployed to: 0x9A1DacBb62A0bFFDb645742Af4ACBE111F65617E
    // 0x1891de019a2d73636d26bdf9c3c89d5d974ffbfb26d68c0dbbd0c62e1d5d3b30
//nftEarnErc20Pool deployed to: 0x675EF87d2084f05A5A127e4d656123B8F8F817D2
    //MET deployed to: 0x06cf35045d5cA21a21080BdEB0D7360AF0c2aF6A
    // recharge deployed to: 0xb4D95389b384BC32BB687e03334DfF3D72D7C17f

    const crystalNft = await ethers.getContractAt("CrystalNft", "0xAEb7e101fF04b369b259d0339648F2Db0E1E353e");

    const NftLockPool = await hre.ethers.getContractFactory("NftLockPool");


    const lock = await NftLockPool.deploy();
    await lock.deployed();
    console.log("lock deployed to:", lock.address);


    const DsgNft = await hre.ethers.getContractFactory("DsgNft");

    const dsgNft = await DsgNft.deploy();
    await dsgNft.deployed();
    console.log("DsgNft deployed to:", dsgNft.address);
    let team_address = "0xCdE96C7a2dEeEB6Ade1cB575F79683bB2080e3f5";
    console.log("team_address:",team_address);
     let baseURI_ = "www.baidu.com"
    await dsgNft.initialize("MekaWarrior NFT ", "MekaWarrior NFT ", team_address, baseURI_);
    await dsgNft.setCrystalNft(crystalNft.address);

    tx = await crystalNft.setOperator(dsgNft.address);
    console.log("setOperator", tx.hash.toString());
     tx = await dsgNft.setLockNft(lock.address);
     console.log(tx.hash.toString());

    // tx = await egc.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // console.log(tx.hash.toString());
    busd = "0xe8B62211DBE12B5A59F446F4498d78923157CDFf"
   // busd = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
    tx = await dsgNft.setFeeToken("0x0000000000000000000000000000000000000000", busd);
    console.log("setFeeToken",tx.hash.toString());
    tx = await dsgNft.setPrice(web3.utils.toWei("0.0002").toString(), web3.utils.toWei("20").toString());
    console.log("setPrice",tx.hash.toString());
    tx = await dsgNft.setWhiteNft(crystalNft.address);
    console.log(tx.hash.toString());

    const nftRewardPool = await ethers.getContractAt("NftRewardPool", "0xB7F89BbBb4202635561197d0dacde0A08A7E523A");


    tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    console.log(tx.hash.toString());

    const invitePool = await ethers.getContractAt("InvitePool", "0x9A1DacBb62A0bFFDb645742Af4ACBE111F65617E");


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
