// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
//npx hardhat run   --network heco_test scripts/recharge_test.js
//npx hardhat run   --network bsc_test scripts/recharge_test.js
//npx hardhat run  scripts/recharge.js
async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
    busd_ = "0xd5912C6C48B18AC31Ea04b19d93F00448C88096E"
    egc_ = "0xc836b44759B1FA0625AFFD445e773c4B89754ecE"
    met_="0x090Ef83ee69e8e6FE44B36b49DE72Dd05a7628Df"

    const busd = await ethers.getContractAt("UsToken", busd_);
    const egc = await ethers.getContractAt("UsToken", egc_);
    const met = await ethers.getContractAt("UsToken", met_);

    to_="0xCD33E3006f6e39F2aBcE983957e7cDD1c9629ADa"
    tx = await egc.transfer(to_, web3.utils.toWei("100000").toString());
    console.log(tx.hash.toString());
    tx = await busd.transfer(to_, web3.utils.toWei("100000").toString());
    console.log(tx.hash.toString());
    tx = await met.transfer(to_, web3.utils.toWei("100000").toString());
    console.log(tx.hash.toString());
  //   const recharge = await ethers.getContractAt("Recharge", "0x5e18fBa03C49B01974F7029FfD6b724146E7f68d");
  // tx =   await  met.approve(recharge.address,web3.utils.toWei("1999","ether"));
  //   console.log(tx.hash.toString())
  //  tx =  await recharge.recharge(web3.utils.toWei("1","ether"));
  //  console.log(tx.hash.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
