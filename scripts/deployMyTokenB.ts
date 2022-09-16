import { ethers } from "hardhat";

async function main() {
  const MyTokenBFactory = await ethers.getContractFactory("MyTokenB");
  const myTokenB = await MyTokenBFactory.deploy();

  await myTokenB.deployed();

  console.log(`MyTokenB deployed to ${myTokenB.address}`);
  // Contract deployed on Goerli at: 0xBDb839eE031c8d509Dcb2986a2F94d50f46AEF5f
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
