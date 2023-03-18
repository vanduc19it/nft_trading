const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy("VANDUC", "VDC");

  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const marketplace = await Marketplace.deploy(1);

  await nft.deployed();
  
  console.log("Successfully deployed smart contract to: ", nft.address);

  await marketplace.deployed();
  
  console.log("Successfully deployed marketplace smc to: ", marketplace.address);

}
// nft smc address:  0xD4ce17BbBE2a5cdC77F6c06A2925D36DD34b60bA
// makerplace:  0xe140f5BDfc30697f5196407A75d66551610a6b78

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});