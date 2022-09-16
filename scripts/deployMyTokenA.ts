import { ethers } from "hardhat";

async function main() {
  const MyTokenAFactory = await ethers.getContractFactory("MyTokenA");
  const myTokenA = await MyTokenAFactory.deploy();

  await myTokenA.deployed();

  console.log(`MyTokenA deployed to ${myTokenA.address}`);
  // Contract deployed on Goerli at: 0x99e7429C439e458aA20CE29A61f43A1075559833
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
