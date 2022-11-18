// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const {expectRevert, time} = require('@openzeppelin/test-helpers');
//heco_test
//npx hardhat run --network heco_test scripts/pool_test.js
//npx hardhat run  scripts/pool_test.js
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
    console.log("intialize:",tx.hash.toString())
    tx = await crystalNft.setOperator(owner.address);
    console.log(tx.hash.toString())

    tx = await crystalNft.mint(addr1.address);
    console.log(tx.hash.toString());
    tx = await crystalNft.mint(addr1.address);
    console.log(tx.hash.toString());
    tx = await crystalNft.mint(owner.address);
    console.log(tx.hash.toString());
    const UsToken = await hre.ethers.getContractFactory("UsToken");
    _total = "1000000000000000000000000000000000";
    const egc = await UsToken.deploy("EGC", "EGC",_total);
    await egc.deployed();
    console.log("egc deployed to:", egc.address);
    egc_token = egc.address;
    nft_addr = crystalNft.address;
    const NftEarnErc20Pool = await hre.ethers.getContractFactory("NftEarnErc20Pool");
    const stakePool = await NftEarnErc20Pool.deploy(egc_token, nft_addr, 0);
    await stakePool.deployed();
    console.log("stakePool deployed to:", stakePool.address);
    tx =await egc.transfer(stakePool.address,web3.utils.toWei("100000","ether"));
    console.log(tx.hash.toString());
//    tx = await stakePool.setRewardTokenPerBlock(web3.utils.toWei("0.001").toString());
//    console.log(tx.hash.toString())
//    tx = await stakePool.setEndBlock(web3.utils.toWei("100", "ether"));
//    console.log(tx.hash.toString());

    tx = await crystalNft.connect(addr1).setApprovalForAll(stakePool.address, true);
    console.log(tx.hash.toString());

    tx = await crystalNft.connect(addr2).setApprovalForAll(stakePool.address, true);
    console.log(tx.hash.toString());
    tx = await crystalNft.connect(owner).setApprovalForAll(stakePool.address, true);
    console.log(tx.hash.toString());
    //memory tokenIds, uint256[] memory powers, uint256 pkId, uint256 energy, uint256 mineId
    tx = await stakePool.connect(addr1).batchStake([1001], [9001], 1, 7200,3);
    console.log("addr1 stake:", tx.hash.toString());
    // tx = await stakePool.connect(owner).punishCheat(addr1.address,1);
    // console.log("punishCheat:", tx.hash.toString());
    // for (let i=0;i<30;i++){
    //     await time.increase(60 * 60*1 + 1);
    //
    //     await time.advanceBlock();
    //     reward = await stakePool.pendingToken(addr1.address,1);
    //    if (i<=22){
    //        console.log((reward/1e18*20*60).toString(),i);
    //    }else {
    //        console.log((reward/1e18).toString(),i);
    //    }
    //
    //
    // }
    // tx = await stakePool.connect(addr1).harvest(1);
    // console.log(tx.hash.toString())
    // await time.increase(60 * 60*1 + 1);
    // //
    //     await time.advanceBlock();

   // tx = await stakePool.connect(owner).setLimitTime(0);
   // console.log("set:", tx.hash.toString());
    await time.increase(60 * 60*12 + 1);
    //
        await time.advanceBlock();
    //
    tx = await stakePool.connect(addr1).withdrawSlot(1);
    console.log("withdrawSlot:", tx.hash.toString());


    tx = await stakePool.connect(addr1).batchStake([1001], [9001], 1, 7200,3);
    console.log("addr1 stake:", tx.hash.toString());
    // await time.increase(60 * 60*1 + 1);
    // await time.advanceBlock();
    // reward = await stakePool.pendingToken(addr1.address,1);
    // console.log((reward/1e18).toString());

    // tx = await stakePool.connect(addr1).harvest(1);
    // console.log("harvest:", tx.hash.toString());
    // await time.increase(60 * 60*25 + 1);
    // await time.advanceBlock();
    // tx = await stakePool.connect(addr1).harvest(1);
    // console.log("harvest:", tx.hash.toString());

    // info = await stakePool.getFullUserInfo(addr1.address,1);
   // console.log(info.toString())
   // tx = await stakePool.connect(addr1).withdrawSlot(1);
   // console.log("addr1 withdraw:", tx.hash.toString());

// for (let i=0;i<100;i++){
//  await time.increase(60 * 60*12 + 1);
//     await time.advanceBlock();
//    pending1 = await stakePool.pendingToken(addr1.address,1);
//     console.log("pending addr1:", pending1.toString())
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
