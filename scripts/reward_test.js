// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {expectRevert, time} = require('@openzeppelin/test-helpers');
const {web3} = require("hardhat");
const {defaultAccounts} = require("ethereum-waffle");
//heco_test
//npx hardhat run --network heco_test scripts/pool_test.js
//npx hardhat run  scripts/reward_test.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
    // accounts = await web3.eth.getAccounts();
    const [owner, addr1, addr2] = await ethers.getSigners();

    const CrystalNft = await hre.ethers.getContractFactory("CrystalNft");


    const crystalNft = await CrystalNft.deploy();
    await crystalNft.deployed();
    console.log("CrystalNft deployed to:", crystalNft.address);
    let baseURI_ = "www.baidu.com"
    tx = await crystalNft.initialize("", "", baseURI_);
    console.log("intialize:", tx.hash.toString())
    tx = await crystalNft.setOperator(owner.address);
    console.log(tx.hash.toString())

    for (let i = 0; i < 10; i++) {
        tx = await crystalNft.mint(owner.address);
        console.log(tx.hash.toString());
    }

    const UsToken = await hre.ethers.getContractFactory("UsToken");

    const egc = await UsToken.deploy("EGC", "EGC",web3.utils.toWei("1000000000000000").toString());
    await egc.deployed();
    console.log("egc deployed to:", egc.address);
    const NftRewardPool = await hre.ethers.getContractFactory("NftRewardPool");
    busd = egc.address
    crystal = crystalNft.address
    const nftRewardPool = await NftRewardPool.deploy(busd, crystal);
    await nftRewardPool.deployed();
    console.log("nftRewardPool deployed to:", nftRewardPool.address);

    tx = await egc.transfer(nftRewardPool.address, web3.utils.toWei("100"))
    console.log(tx.hash.toString());
    tx = await nftRewardPool.setPeriod(60 * 5);
    console.log(tx.hash.toString());


    tx = await crystalNft.connect(owner).setApprovalForAll(nftRewardPool.address, true);
    console.log(tx.hash.toString());

    tx = await nftRewardPool.connect(owner).batchStake([1001]);
    console.log("batch stake:",tx.hash.toString());
   a =  await  nftRewardPool.expectRewardToken(owner.address);
   console.log((a/1e18).toString())
    // await time.increase(60 * 5 + 1);
    // await time.advanceBlock();
    // tx = await nftRewardPool.harvest();
    // console.log("harvest->",tx.hash.toString());
    // info = await nftRewardPool.getRewardInfo();
    // console.log("reward:",info.toString())
    // await time.increase(60 * 5 + 1);
    // await time.advanceBlock();
    // tx = await nftRewardPool.harvest();
    // console.log("harvest->",tx.hash.toString());
    // info = await nftRewardPool.getRewardInfo();
    // console.log("reward:",info.toString())
    // await time.increase(60 * 5 + 1);
    // await time.advanceBlock();
    // tx = await nftRewardPool.harvest();
    // console.log("harvest->",tx.hash.toString());
    // info = await nftRewardPool.getRewardInfo();
    // console.log("reward:",info.toString())
    // for (let i = 0; i < 20; i++) {
    //     // if (i<10){
    //     //     tx = await egc.transfer(nftRewardPool.address, web3.utils.toWei("100"))
    //     //     console.log(tx.hash.toString());
    //     // }
    //
    //     await time.increase(60 * 5 + 1);
    //     await time.advanceBlock();
    //
    //     tx = await nftRewardPool.harvest();
    //     console.log(tx.hash.toString());
    //     info = await nftRewardPool.getRewardInfo();
    //     console.log(info.toString())
    // }

    // pending1 = await stakePool.pendingToken(addr1.address, 1);
    // console.log("pending addr1:", pending1.toString())

    // await time.increase(5 * 60 + 1);
    // await time.advanceBlock();

    // tx = await stakePool.connect(addr1).batchStake([1002], [19000], 2, 0);
    // console.log("addr1 stake:", tx.hash.toString());
    // pending1 = await stakePool.pendingToken(addr1.address, 1);
    // console.log("pending addr1:", pending1.toString())
    // await time.increase(5 * 60 + 1);
    // await time.advanceBlock();

    // tx = await stakePool.connect(owner).batchStake([1003], [19000], 3, 0);
    // console.log("addr1 stake:", tx.hash.toString());
    // pending1 = await stakePool.pendingToken(addr1.address, 1);
    // console.log("pending addr1:", pending1.toString())

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
