const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode } = require('./compile');


const provider = new HDWalletProvider(
    // account mmeumonic -> to connect to your wallet
    // Test metamask wallet -> no real ETH here
    'spoil zebra armed farm stand blouse buyer verify vocal wheat problem consider',
    "https://goerli.infura.io/v3/21f0c13207bf452abcb5e8c8a53772ec"
);
const web3 = new Web3(provider);
// send ether, deploy contract, all with the web3 variable

const deploy = async () => {
  const accounts = await web3.eth.getAccounts(); // memounic has diff accounts, we will get the first one

  console.log(" Attempting to deploy from account ", accounts[0]) ;

  const result = await new web3.eth.Contract(
    JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas:'1000000', from:accounts[0]}); // provide ABI

    console.log("contract deployed to: ", result.options.address); // contract deployed to:  0x068CAC423726468a8b4a2596408F4852D8822A73
    provider.engine.stop();
}
deploy();
