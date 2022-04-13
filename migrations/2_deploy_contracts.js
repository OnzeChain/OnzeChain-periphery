const OnzechainRouter02 = artifacts.require("OnzechainRouter02");
const WETH = artifacts.require("./WETH.sol");


module.exports = async (deployer, network, account) => {
  let wethAddress;
  let factoryAddress;
  if (network === "mainnet") {
    wethAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  } else {
    await deployer.deploy(WETH);
     wethAddress = await WETH.deployed();
     console.log("wethAddress: ", wethAddress.address);

  }


  factoryAddress = "0x8F4b3E64D6580a346dAD0FdA01C03aC7ED588b27";
  await deployer.deploy(OnzechainRouter02, factoryAddress, wethAddress.address);
  console.log(`OnzechainRouter02 deployed on ${network} with factoryAddress ${factoryAddress} and wethAddress ${wethAddress.address}`)
};

// "copy-secrets": "cp .env ./swap-contracts-core/.",
// "deploy-preparation-ganache": "yarn install-all && yarn copy-secrets && yarn deploy-core && yarn deploy-weth",
// "deploy-preparation-ropsten": "yarn install-all && yarn copy-secrets && yarn deploy-core-ropsten",
// "deploy-preparation-rinkeby": "yarn install-all && yarn copy-secrets && yarn deploy-core-rinkeby",
// "deploy-preparation-kovan": "yarn install-all && yarn copy-secrets && yarn deploy-core-kovan",
// "truffle-migrate-ganache": "./node_modules/.bin/truffle migrate --reset --network development",
// "truffle-migrate-ropsten": "./node_modules/.bin/truffle migrate --reset --network ropsten",
// "truffle-migrate-rinkeby": "./node_modules/.bin/truffle migrate --reset --network rinkeby",
// "truffle-migrate-kovan": "./node_modules/.bin/truffle migrate --reset --network kovan",
// "install-all": "node install.js",
// "deploy-core": "./deploy-core.sh development",
// "deploy-core-ropsten": "./deploy-core.sh ropsten",
// "deploy-core-rinkeby": "./deploy-core.sh rinkeby",
// "deploy-core-kovan": "./deploy-core.sh kovan",
// "deploy-weth": "node ./WETH/deploy.js",
// "update-init-code": "node ./scripts/updateInitCodeHash.js",
// "verify-init-code": "node ./scripts/verifyInitCodeHash.js"