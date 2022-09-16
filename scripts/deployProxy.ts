import { ethers } from "hardhat";

async function main() {
  const ProxyFactory = await ethers.getContractFactory("Proxy");
  const proxy = await ProxyFactory.deploy("0x8129fc1c", "0x99e7429C439e458aA20CE29A61f43A1075559833");

  await proxy.deployed();

  console.log(`Proxy deployed to ${proxy.address}`);
  // Contract deployed on Goerli at: 0x7C98d7793d1d41A67f89991e02d30cCaD4eF3144
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
