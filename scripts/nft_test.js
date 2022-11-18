// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const {ethers} = require("hardhat");
const hre = require("hardhat");
//heco_test 0x4d35400F4D31F9Cb0B5C009341959D3D156BE403
//npx hardhat run --network bsc_mainnet scripts/nft_test.js
//npx hardhat run  scripts/nft_test.js
//npx hardhat run --network bsc_test scripts/nft_test.js
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
    console.log("hi:", accounts[0]);
    //
    //    const NftRewardPool = await hre.ethers.getContractFactory("NftRewardPool");
    //  busd = "0x671695EE25f8a2a4382fE268f37d68ebaFD73C37"
    //   crystal="0x94ccd798B8C9dEE97d05910f644aF7909070a2c5"
    //   const nftRewardPool = await NftRewardPool.deploy( busd,crystal);
    //   await nftRewardPool.deployed();
    //   console.log("nftRewardPool deployed to:", nftRewardPool.address);
    //   const dsgNft = await ethers.getContractAt("DsgNft", "0xd11a217Cbd9dDe55F57F5bb97Db5452D9D4B768E");
    //   tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    //   console.log(tx.hash.toString());
    //
    //  tx = await nftRewardPool.setPeriod(60*10);
    //  console.log(tx.hash.toString());
    // return

   //  const CrystalNft = await hre.ethers.getContractFactory("CrystalNft");
   //
   //
   //  const crystalNft = await CrystalNft.deploy();
   //  await crystalNft.deployed();
   //  console.log("CrystalNft deployed to:", crystalNft.address);
   //  //  let team_address =accounts[0];
   //  let baseURI_ = "www.baidu.com"
   //  await crystalNft.initialize("", "", baseURI_);
   //
   //  const DsgNft = await hre.ethers.getContractFactory("DsgNft");
   //
   //  const dsgNft = await DsgNft.deploy();
   //  await dsgNft.deployed();
   //  console.log("DsgNft deployed to:", dsgNft.address);
   //  let team_address = accounts[0];
   //  console.log("team_address:", team_address);
   //  // let baseURI_ = "www.baidu.com"
   //  await dsgNft.initialize("", "", team_address, baseURI_);
   //  await dsgNft.setCrystalNft(crystalNft.address);
   //
   //  tx = await crystalNft.setOperator(dsgNft.address);
   //  console.log("setOperator", tx.hash.toString());
   //  tx = await crystalNft.setOperator(accounts[0]);
   //  console.log("setOperator", tx.hash.toString());
   //
   // tx =  await  crystalNft.mint(accounts[0]);
   // console.log(tx.hash.toString())

    //
    // //
    // const UsToken = await hre.ethers.getContractFactory("UsToken");
    //
    // const egc = await UsToken.deploy("EGC", "EGC");
    // await egc.deployed();
    // console.log("egc deployed to:", egc.address);
    //
    // const BusdToken = await hre.ethers.getContractFactory("UsToken");
    //
    // const busd = await BusdToken.deploy("BUSD", "BUSD",web3.utils.toWei("100000").toString());
    // await busd.deployed();
    // console.log("busd deployed to:", busd.address);
    //
    // const NftLockPool = await hre.ethers.getContractFactory("NftLockPool");
    //
    //
    // const lock = await NftLockPool.deploy();
    // await lock.deployed();
    // console.log("lock deployed to:", lock.address);

    //
    // // tx = await egc.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // // console.log(tx.hash.toString());
    // // tx = await busd.transfer("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6", web3.utils.toWei("9000").toString());
    // // console.log(tx.hash.toString());
    //
   //  tx = await dsgNft.setFeeToken("0x0000000000000000000000000000000000000000", busd.address);
   //  console.log(tx.hash.toString());
   //  tx = await dsgNft.setPrice(web3.utils.toWei("1").toString(), web3.utils.toWei("20").toString());
   //  console.log(tx.hash.toString());
   //  tx = await dsgNft.setWhiteNft(crystalNft.address);
   //   console.log(tx.hash.toString());
   //  tx = await dsgNft.setLockNft(lock.address);
   //  console.log(tx.hash.toString());
   //  tx=   await crystalNft.setApprovalForAll(dsgNft.address,true);
   // //   tx.wait()
   //    console.log(tx.hash.toString())
   //
   //  tx = await dsgNft.freeMint(accounts[0],[1001]);
   //  console.log(tx.hash.toString())
   // bal =  await  crystalNft.balanceOf(lock.address);
   //  console.log(bal.toString())
    //
    //
    // const NftRewardPool = await hre.ethers.getContractFactory("NftRewardPool");
    //
    // const nftRewardPool = await NftRewardPool.deploy(busd.address, crystalNft.address);
    // await nftRewardPool.deployed();
    // console.log("nftRewardPool deployed to:", nftRewardPool.address);
    //
    // tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    // console.log(tx.hash.toString());
    //
    //
    // const InvitePool = await hre.ethers.getContractFactory("InvitePool");
    //
    // const invitePool = await InvitePool.deploy();
    // await invitePool.deployed();
    // console.log("invitePool deployed to:", invitePool.address);
    //
    //
    // tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    // console.log(tx.hash.toString());
    //
    // tx = await dsgNft.setInvitePool(invitePool.address);
    // console.log(tx.hash.toString());
    // tx = await egc.approve(dsgNft.address, web3.utils.toWei("100", "ether").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.approve(dsgNft.address, web3.utils.toWei("100", "ether").toString());
    // console.log(tx.hash.toString());
    //
    // tx = await dsgNft.batchMint(accounts[0], 5);
    // console.log("batchMint->", tx.hash.toString());
    //
    //
    // return


    // EGCToken: "0xb20136182EE7471d1fd1f1D2A39875ba89Bec6ae",
    //     BUSDToken: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    //     Met: "0x9A75e66895ab6405EcC3f4964098E38D33a3Ad56",
    //     CrystalNft: "0x2CF95A9Bab79A7cd108B3B353efB2b4CA2Ab2abF",
    //     DsgNft: "0xB085408fCf01E9404A49fcdb42E377d644677A52",
    //     RewardPool: "0xa6E4b10dA02F233bE579e53373c3113Cd3501036",
    //     StakePool: "0xCf75137B094A2553b54cf5DFC758EB16Abc7a754",
    //     Recharge: "0xBE72273b00E2D2950b506fd502572B12860a8Bdf",
    //     InvitePool: "0xF1e944B5d1a4eD02de6543b6346e82D08EDbfc7e",


    /*    const dsgNft = await ethers.getContractAt("DsgNft", "0x59DE97735e1FB768d9AaA7504034F1afD03502a8");
        const invitePool = await ethers.getContractAt("InvitePool", "0x60Ad8a7107BE27b462a7a7e0Ea8CDbC311849aD9");
      const egc = await ethers.getContractAt("UsToken", "0xb20136182EE7471d1fd1f1D2A39875ba89Bec6ae");
    //  const busd = await ethers.getContractAt("UsToken", "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56");
      const met = await ethers.getContractAt("UsToken", "0x9A75e66895ab6405EcC3f4964098E38D33a3Ad56");
      const crystalNft = await ethers.getContractAt("DsgNft", "0x17A010B0b51A53e2f48E2c6b5155f13f19018EB3");
        const stakePool = await ethers.getContractAt("NftEarnErc20Pool", "0x4d35400F4D31F9Cb0B5C009341959D3D156BE403");
      const rewardPool = await ethers.getContractAt("NftRewardPool", "0xB77402e2358a579e8579852953D37C9c9A635C11");
      const recharge = await ethers.getContractAt("Recharge", "0x396463C6b67b3Cfb285f11C70B8408FEC8935D3c");
  */

    /* bak
        //test
        EGCToken: "0xeF361CB083d76050181ec0aFdeb78F63FE4F9061",
            BUSDToken: "0x87E86b976768d35737Aa243B03DFb505e4D10911",
            Met: "0x9a4399887d72FF642FE35061bEA4624Dd5c39743",
            CrystalNft: "0xC86C00eF442359730279De315CE87AD066B2dC2D",
            DsgNft: "0x1BCdCEc91816E488706255fEf1859039B01ED99D",
            RewardPool: "0x9B4E95633c16c8fea1a684CB875a3D099460C0C1",
            StakePool: "0xFbC0F135C790be166aBd6084C3C4A2c286e22c28",
            Recharge: "0x783adC06Fe3AB32Df0A0E2ab53F1645bc30744D3",
            InvitePool: "0x92a2268642E24575b7571F3B1aE9146cE1Dc6e01",


    //  ----------------------------------------------------------------------------------
            EGCToken: "0xf921d1a4AFa2087dD27a0cB096cb1989E47153Ca",
            BUSDToken: "0xe8B62211DBE12B5A59F446F4498d78923157CDFf",
            Met: "0x06cf35045d5cA21a21080BdEB0D7360AF0c2aF6A",
            CrystalNft: "0xAEb7e101fF04b369b259d0339648F2Db0E1E353e",
            DsgNft: "0x5149297fdee4726773a2A391e50d825714CBE4d8",
            RewardPool: "0xB7F89BbBb4202635561197d0dacde0A08A7E523A",
            StakePool: "0x38f3d5c04F45Eb98B5B8171d1C41FdCE08F7eF4F",
            Recharge: "0xb4D95389b384BC32BB687e03334DfF3D72D7C17f",
            InvitePool: "0x9A1DacBb62A0bFFDb645742Af4ACBE111F65617E",
        */


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
//nftEarnErc20Pool deployed to: 0x38f3d5c04F45Eb98B5B8171d1C41FdCE08F7eF4F
    //MET deployed to: 0x06cf35045d5cA21a21080BdEB0D7360AF0c2aF6A
    // recharge deployed to: 0xb4D95389b384BC32BB687e03334DfF3D72D7C17f
    const dsgNft = await ethers.getContractAt("DsgNft", "0x5149297fdee4726773a2A391e50d825714CBE4d8");
    const invitePool = await ethers.getContractAt("InvitePool", "0x9A1DacBb62A0bFFDb645742Af4ACBE111F65617E");
    const egc = await ethers.getContractAt("UsToken", "0xf921d1a4AFa2087dD27a0cB096cb1989E47153Ca");
    const busd = await ethers.getContractAt("UsToken", "0xe8B62211DBE12B5A59F446F4498d78923157CDFf");
    const met = await ethers.getContractAt("UsToken", "0x06cf35045d5cA21a21080BdEB0D7360AF0c2aF6A");
    const crystalNft = await ethers.getContractAt("DsgNft", "0xAEb7e101fF04b369b259d0339648F2Db0E1E353e");
    const stakePool = await ethers.getContractAt("NftEarnErc20Pool", "0x38f3d5c04F45Eb98B5B8171d1C41FdCE08F7eF4F");
    const rewardPool = await ethers.getContractAt("NftRewardPool", "0xB7F89BbBb4202635561197d0dacde0A08A7E523A");
    const recharge = await ethers.getContractAt("Recharge", "0xb4D95389b384BC32BB687e03334DfF3D72D7C17f");
    // tx = await dsgNft.setBaseURI("https://api.mekawarrior.io/metadata/nft/");
    // console.log(tx.hash.toString());
   // owner =  await  dsgNft.ownerOf(1294);
   //  console.log(owner)
    // tx = await dsgNft.whiteNft();
    // console.log(tx.toString());
    // b =   web3.eth.abi.decodeParameters([
    //       {
    //           "internalType": "uint256[]",
    //           "name": "tokenIds",
    //           "type": "uint256[]"
    //       },
    //       {
    //           "internalType": "uint256[]",
    //           "name": "powers",
    //           "type": "uint256[]"
    //       },
    //       {
    //           "internalType": "uint256",
    //           "name": "pkId",
    //           "type": "uint256"
    //       },
    //       {
    //           "internalType": "uint256",
    //           "name": "energy",
    //           "type": "uint256"
    //       },
    //       {
    //           "internalType": "uint256",
    //           "name": "mineId",
    //           "type": "uint256"
    //       }
    //   ], '0x00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000005120000000000000000000000000000000000000000000000000000000000000518000000000000000000000000000000000000000000000000000000000000051a0000000000000000000000000000000000000000000000000000000000000528000000000000000000000000000000000000000000000000000000000000052a000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000004b0000000000000000000000000000000000000000000000000000000000000057800000000000000000000000000000000000000000000000000000000000004b000000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000003e8');
    //   console.log(b);
    //   let list =  [ '2261', '2265', '2274', '2277', '2278' ]
    //   for (i=0;i<list.length;i++){
    //       owner = await dsgNft.ownerOf(list[i]);
    //       console.log(owner.toString());
    //   }
    // owner = await stakePool.getMineId("0x38c74b1FB155e1696275135064346C31B1197375",11);
    // console.log(owner.toString())
    // list= await dsgNft.getInvitorCost("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993")
    // for(i=0;i<list.length;i++){
    //   console.log("user:",list[i].user.toString())  ;
    //     console.log("cost:",(list[i].cost/1e18).toString())  ;
    //     console.log("inviteReward:",(list[i].inviteReward/1e18).toString())  ;
    // }
//   l= await stakePool.limitTime();
// console.log(l.toString())
//     tx = await stakePool.setLimitTime(60*60);
//     console.log(tx.hash.toString())
    //tx = await egc.transfer(earnpool, web3.utils.toWei("9720361278", "ether"));
    // tx = await egc.transfer(earnpool,"9720361278317150000000000000");
    // console.log(tx.hash.toString())
    //  per = await rewardPool.rewardTokenPerShare();
    //  console.log("per nft:",(per/1e18).toString())
    //  total = await rewardPool.totalNft();
    //  console.log("total nft:",total.toString())
    //  n= await rewardPool.getUserInfo("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993");
    //  console.log("user nft:",n.toString())
    //
    //  l= await rewardPool.lastReward();
    //  console.log("real last:",l.toString())
    //  r= await rewardPool.getRewardInfo()
    //  console.log("last reward:",((r[0]+r[1])/1e18).toString())
    //  tx = await rewardPool.expectRewardToken("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993");
    //  console.log((tx/1e18).toString())
    //  re = await rewardPool.rewardTokenPerShare()
    //  console.log("perShare:",(re/1e18).toString());
    //  // t = await rewardPool.period();
    //  // console.log(t.toString())
    //  re = await rewardPool.expectRewardToken("0xCD33E3006f6e39F2aBcE983957e7cDD1c9629ADa")
    //  console.log("myreward:",(re/1e18).toString());
    // bal=  await  egc.balanceOf(stakePool.address)
    //   console.log((bal/1e18).toString());
    //   tx = await stakePool.emergencyRewardWithdraw(bal.toString())
    //   console.log(tx.hash.toString())

    // n = await crystalNft.balanceOf(accounts[0]);
    // console.log("bal:",n.toString())
    // ids = []
    // for (let i = 0; i < n; i++) {
    //     tid = await crystalNft.tokenOfOwnerByIndex(accounts[0], i)
    //     ids[i] = tid;
    // }
    // tx=   await crystalNft.setApprovalForAll(rewardPool.address,true);
    //   tx.wait()
    //   console.log(tx.hash.toString())
    //  tx =  await  rewardPool.batchStake(ids);
    //   console.log(tx.hash.toString())
    // nft = await rewardPool.dsgNft();
    // console.log(nft.toString())
    // nft = await stakePool.dsgNft();
    // console.log(nft.toString())
    // tx = await  recharge.setToken(egc.address,true);
    // console.log(tx.hash.toString())
    // tx = await dsgNft.setPveWallet(recharge.address);
    // console.log(tx.hash.toString())

    // team =  await dsgNft._teamWallet();
    // _rewardWallet =  await dsgNft._rewardWallet();
    // _PveWallet =  await dsgNft._PveWallet();
    // console.log(team.toString(),_rewardWallet.toString(),_PveWallet.toString());
    // bal = await egc.balanceOf(stakePool.address);
    // console.log((bal/1e18).toString());
    // tx = await stakePool.emergencyRewardWithdraw(bal.toString())
    //   console.log(tx.hash.toString())
//      owner  = await  recharge.owner();
// console.log("recharge's owner:",owner.toString());
//     owner  = await  dsgNft.owner();
//     console.log("dsgNft's owner:",owner.toString());
//
//     owner  = await  dsgNft._teamWallet();
//     console.log("team address:",owner.toString());
    //   _newOwner = "0x22c7Dc87A460397a00E978a745D5d9579f50d376"
    // tx = await recharge.transferOwnership(_newOwner);
    // console.log(tx.hash.toString())
    // tx = await invitePool.transferOwnership(_newOwner);
    // console.log(tx.hash.toString())
    // tx = await crystalNft.transferOwnership(_newOwner);
    // console.log(tx.hash.toString())
    // tx = await stakePool.transferOwnership(_newOwner);
    // console.log(tx.hash.toString())
    // tx = await rewardPool.transferOwnership(_newOwner);
    // console.log(tx.hash.toString())

    // a= await  stakePool.pendingToken("0x22E867FCd61CeA28Fa8766d103C4FA7B03c7bcC9",1);
    //  console.log(a.toString())

    // a= await  stakePool.userInfo("0x22E867FCd61CeA28Fa8766d103C4FA7B03c7bcC9")
    // console.log(a.slotInfo(1));
    // a= await  stakePool.getFullUserInfo("0x22E867FCd61CeA28Fa8766d103C4FA7B03c7bcC9",1);
    // console.log(a[3].toString())
    // console.log(a[4].toString())
    // bal =  await egc.balanceOf(stakePool.address);
    // console.log((bal/1e18).toString())
    // tx = await stakePool.emergencyRewardWithdraw(bal.toString());
    //  console.log(tx.hash.toString());
    // tx = await stakePool.setLimitTime(0);
    // console.log(tx.hash.toString())
    // //0xfdF12718Bbe8653Cb7831d0f52C27A5cDa6fc17F
    // owner =  await  rewardPool.owner();
    // console.log(owner.toString())
    // a = await web3.eth.getBalance(accounts[0])
    // console.log(a/1e18)
    // tx = await rewardPool.setPeriod(60*10);
    // console.log(tx.hash.toString());
    //
    // //
    //  ret = await rewardPool.getRewardInfo();
    //  console.log("可分：",(ret[1]/1000000000000000000).toString());
    //
    //  b = await  busd.balanceOf("0x67904EE5cc3438AB3AeB51320a85D9F61cE9bD83");
    //  console.log("余额：",(b/1000000000000000000).toString())
    //
    // // tx = await  rewardPool.harvest();
    // // console.log(tx.hash.toString());
    // s = await rewardPool.startTime();
    // console.log(s.toString())
    // n = await web3.eth.getBlockNumber();
    // bl = await web3.eth.getBlock(n.toString());
    // cur = bl.timestamp;
    //
    // console.log("eclipse:", (cur - s));
    // period =  await  rewardPool.period();
    // console.log("period:",period.toString())
    // weekey = 60 * 10
    // console.log("倒计时：", (weekey - (cur - s)).toString())


    // tx = await egc.transfer(stakePool.address, web3.utils.toWei("8000000", "ether"));
    //  tx.wait()
    // console.log(tx.hash.toString())
//
//   info =  await  stakePool. getFullUserInfo(accounts[0],26);
//   console.log(info[1].toString())
//    tx =  await  stakePool.withdrawSlot(26)
// console.log(tx.hash.toString())
//    r = await rewardPool.dsgNft();
//
//    console.log(r.toString())
    //
    //
    // bal =  await  crystalNft.balanceOf("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42");
    //  console.log(bal.toString())
    //
    // ret =  await  stakePool.getFullUserInfo("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42",35)
    //  console.log(ret[0].toString())
    // bal =  await  crystalNft.balanceOf("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42");
    // console.log(bal.toString())
    // const stakePool = await ethers.getContractAt("NftEarnErc20Pool", "0x5f38DB79885E2E31E54Ce5b5eA4056B05F4Cf16A");
    // upper = "0x56a45AE282469E8Aa2F1f17fAaf0b0e19A02b65f"
    // console.log(web3.utils.toWei("1").toString())
    // console.log(web3.utils.toWei("1","ether").toString())
    // tx = await dsgNft.setWhiteNft(crystalNft.address);
    // console.log(tx.hash.toString());
    // tx = await dsgNft.setPrice(web3.utils.toWei("1").toString(), web3.utils.toWei("20").toString());
    // console.log(tx.hash.toString());
    //  pending1 = await stakePool.pendingToken(accounts[0], 9999999999);
    //     console.log("pending addr1:", (pending1/1e18).toString())
    // tx = await egc.transfer("0xCD33E3006f6e39F2aBcE983957e7cDD1c9629ADa", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0xCD33E3006f6e39F2aBcE983957e7cDD1c9629ADa", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0xCD33E3006f6e39F2aBcE983957e7cDD1c9629ADa", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await egc.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());
    // // tx = await busd.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("9000000").toString());
    // // console.log(tx.hash.toString());
    // tx = await met.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());
    //
    // tx = await egc.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0x12707D19604b7A0A0975e0cF74e1725f8F21Be42", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());


    // tx = await egc.transfer("0xA159B72f141Ab983ce0bb0DE3bd5A596310D110C", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0xA159B72f141Ab983ce0bb0DE3bd5A596310D110C", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0xA159B72f141Ab983ce0bb0DE3bd5A596310D110C", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());


    // tx = await egc.transfer("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0x5C5715bfAfC211f32Be1E56e8D21665B0f16E993", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());


    // tx = await egc.transfer("0xaa33f4f8d55d6823f23bd41944650d512d5ba869", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0xaa33f4f8d55d6823f23bd41944650d512d5ba869", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0xaa33f4f8d55d6823f23bd41944650d512d5ba869", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());

    // tx = await egc.transfer("0xF3C25Bf04961DD9721B33066C3833A4FD8144944", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.transfer("0xF3C25Bf04961DD9721B33066C3833A4FD8144944", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());
    // tx = await met.transfer("0xF3C25Bf04961DD9721B33066C3833A4FD8144944", web3.utils.toWei("9000000").toString());
    // console.log(tx.hash.toString());


    // tx = await egc.transfer("0x22E867FCd61CeA28Fa8766d103C4FA7B03c7bcC9", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());
    // // tx = await busd.transfer("0xe456a2902F329828b23a9B30f470871AC76b6b80", web3.utils.toWei("1000000").toString());
    // // console.log(tx.hash.toString());
    // tx = await met.transfer("0x22E867FCd61CeA28Fa8766d103C4FA7B03c7bcC9", web3.utils.toWei("1000000").toString());
    // console.log(tx.hash.toString());

    // t = await dsgNft._token();
    // console.log(t.toString())
//    a =  await  busd.allowance("0x12707d19604b7a0a0975e0cf74e1725f8f21be42","0x461aa861337ecd98ccae49371b5d4a3fd91afba3")
// console.log(web3.utils.fromWei(a.toString()))
//
//     let l=[1650 ,1876 ,1034 ,1057 ,1168]
//         for (let i = 0; i < 5; i++) {
//         tid = await dsgNft.ownerOf(l[i])
//       console.log(tid.toString(),i)
//     }
//     tx = await dsgNft.setApprovalForAll(stakePool.address, true)
//     tx.wait()
//     console.log(tx.hash.toString());
//     n = await dsgNft.balanceOf(accounts[0]);
//     console.log("bal:",n.toString())
//     ids = []
//     for (let i = 0; i < 5; i++) {
//         tid = await dsgNft.tokenOfOwnerByIndex(accounts[0], i)
//         ids[i] = tid;
//     }
//
//
//     tx = await stakePool.batchStake(ids, [100, 100, 2000, 33, 221], 99999999991, 0);
//     console.log(tx.hash.toString());
    // pending1 = await stakePool.pendingToken(accounts[0], 9999999999);
    // console.log("pending addr1:", (pending1/1e18).toString())

    // tx = await invitePool.addRecommend(accounts[0], upper);
    // console.log(tx.hash.toString());
    // tx = await egc.approve(dsgNft.address, web3.utils.toWei("100","ether").toString());
    // console.log(tx.hash.toString());
    // tx = await busd.approve(dsgNft.address, web3.utils.toWei("100","ether").toString());
    // console.log(tx.hash.toString());

    // bal = await busd.balanceOf(upper);
    // console.log("bal:", bal.toString());
    //   tx = await dsgNft.batchMint(accounts[0], 5);
    //   console.log("batchMint->", tx.hash.toString());
    // bal = await busd.balanceOf(upper);
    // console.log("bal1:", bal.toString());


    //     const rewardPool = await ethers.getContractAt("NftRewardPool", "0xD6A8b2d0a5C85464FaBf3a2486bD3F029E76c79e");
    //  //  r = await  rewardPool.rewardTokenPerShare();
    // // t  = await  rewardPool.rewardToken();
    //    console.log(r.toString())
    // tk =    await  busd.balanceOf("0xD6A8b2d0a5C85464FaBf3a2486bD3F029E76c79e")
    //    console.log(tk.toString())
    //     r = await  rewardPool.expectRewardToken("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6");
    //     console.log(r.toString())
    // const NftRewardPool = await hre.ethers.getContractFactory("NftRewardPool");
    //
    // const nftRewardPool = await NftRewardPool.deploy( "0xaBD7cCe008B58fEC0DC38D7331B0102d3DD89Da9","0x0b6A17DBAfc8FB0F400a9d4532aacDf4790E9D0a");
    // await nftRewardPool.deployed();
    // console.log("nftRewardPool deployed to:", nftRewardPool.address);
    // tx = await dsgNft.setRewardWallet(nftRewardPool.address);
    // console.log(tx.hash.toString());


    // const rewardPool = await ethers.getContractAt("NftRewardPool", "0xF88197CF82D2c072941Dca0a2Ab5aeeFBd65adD2");
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
    // tx = await  egc.transfer("0xaa33f4f8d55d6823f23bd41944650d512d5ba869",web3.utils.toWei("10000","ether"));
    // console.log(tx.hash.toString());
    //
    // tx = await  busd.transfer("0xaa33f4f8d55d6823f23bd41944650d512d5ba869",web3.utils.toWei("10000","ether"));
    // console.log(tx.hash.toString());
    //  team =   await dsgNft._teamWallet();
    //  console.log("team wallet->",team.toString());
    // tx =  await egc.approve(dsgNft.address,web3.utils.toWei("5").toString());
    //  console.log(tx.hash.toString());
    //  tx =  await busd.approve(dsgNft.address,web3.utils.toWei("5000").toString());
    //  console.log(tx.hash.toString());
//     tx = await dsgNft.batchMint(accounts[0],5);
//     const rc = await tx.wait(); // 0ms, as tx is already confirmed
//     const event = rc.events.find(event => event.event === 'BatchMinted');
//     const [nftids,to] = event.args;
//
// console.log(nftids.toString())
//     tx = await  dsgNft.setApprovalForAll(stakePool.address,true)
//     console.log(tx.hash.toString());
//     tx = await  stakePool.batchStake(nftids, [100,100,2000,33,221], 9999999999, 0);
//     console.log(tx.hash.toString());


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
