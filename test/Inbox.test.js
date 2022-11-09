const assert = require('assert'); 
const ganache = require('ganache-cli');// importing...
const Web3 = require('web3');// is upper-case because Web3 is a constructor (class)

const web3 = new Web3(ganache.provider()); // an instance - lower case
// provider -> the one who joins/communicates ganache and web3. Tells web3 on what network to connect
// in this case, to our local ganache
const {interface, bytecode } = require('../compile');

let accounts;
let inbox;
// beforeEach is only executed when there's at least 1 'it' test funct created
beforeEach(async () => {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts(); 
    console.log("accounts: ", accounts);
    // use one of the accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments:['Hi there!! (initial msg)']})
        .send({from:accounts[0], gas:'1000000'}) // 1m gas
})

describe('Inbox', () => {
    it('deploys a contract', () => {
        // creating only to check if beforeEach() is working.
        console.log('inbox:' , inbox);
    })
})