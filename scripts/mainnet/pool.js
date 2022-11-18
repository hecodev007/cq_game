// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
//heco_test
//npx hardhat run --network heco_test scripts/pool.js
// npx hardhat run --network bsc_mainnet scripts/mainnet/pool.js
//npx hardhat run --network bsc_test scripts/pool.js
//npx hardhat run  scripts/pool.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // We get the contract to deploy




    egc_token = "0xEf1Db65b04ABB6E6d9A1870BeF0B0197eF3121a2";
    nft_addr = "0x48105a0fCcDB4D0347C015E9c3c17AF5591f7A10"
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0])
    const NftEarnErc20Pool = await hre.ethers.getContractFactory("NftEarnErc20Pool");
    const nftEarnErc20Pool = await NftEarnErc20Pool.deploy(egc_token, nft_addr, 0);
    await nftEarnErc20Pool.deployed();
    console.log("nftEarnErc20Pool deployed to:", nftEarnErc20Pool.address);
    tx = await nftEarnErc20Pool.setRewardTokenPerBlock(web3.utils.toWei("0.001").toString());
    console.log(tx.hash.toString())
    tx = await nftEarnErc20Pool.setEndBlock(web3.utils.toWei("100", "ether"));
    console.log(tx.hash.toString())

    // tx = await  nftEarnErc20Pool.setLimitTime(60*2);
    // console.log(tx.hash.toString())

     // const egc = await ethers.getContractAt("UsToken", egc_token);
     // earnpool = nftEarnErc20Pool.address
   // earnpool = "0xCf75137B094A2553b54cf5DFC758EB16Abc7a754"
    //9800000000
    // tx = await egc.transfer(earnpool, web3.utils.toWei("9800000000", "ether"));
    // console.log(tx.hash.toString())



    //  const dsgNft = await ethers.getContractAt("DsgNft", nft_addr);
    //  recharge = "0xfC42eEe319033FD027991F7c73BB149291aEbCe9"
    // tx =  await  dsgNft.setPveWallet(recharge);
    //  console.log(tx.hash.toString())
    //  const egc = await ethers.getContractAt("UsToken", egc_token);
    //  earnpool = "0x8Ac3e16faa729472d3240f5202E976824f1A11bD"
    //  tx = await  egc.transfer(earnpool,web3.utils.toWei("10000000","ether"));
    //  console.log(tx.hash.toString())

    // ch = await  dsgNft.UserChance("0x62c38d3ee78211fac9262916ffaf7c5e61110ec6");
    // console.log(ch.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
