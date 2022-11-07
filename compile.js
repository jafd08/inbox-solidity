const path = require('path'); // cross platform compiler
const fs = require('fs'); // filesystem module
const solc = require('solc')

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
const source = fs.readFileSync(inboxPath,'utf8')
// console.log(" solc.compile(source,1): ",  solc.compile(source,1)); 

//  we get *bytecode* which is representation of all our contract code
// we use this to store it in our contract

// *interface* = contract ABI -> communication layer between Solidity world and the Javascript world
// the apis/methods we can use for this contract. like getMessage, setMessage, etc

module.exports = solc.compile(source,1).contracts[':Inbox']; // export big object and contracts
