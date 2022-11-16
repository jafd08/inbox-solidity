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