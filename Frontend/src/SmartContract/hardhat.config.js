
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "BaseTestnet",
  networks:{
    hardhat:{},
    BaseTestnet: {
      url: "https://base-sepolia.blockpi.network/v1/rpc/public",
      chainId: 84532,
      accounts: ['5753e65f56865a161fbf41932a0d855139a4ce9dc20d82fb655bff393fc41702'],
    },
  }
};