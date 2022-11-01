pragma solidity ^0.4.17;

contract Inbox {
    string public message; // creating a public variable Solidity will create a function to retrieve that variable, getMessage() is just duplicate in this case.
    // get functions are great for private vars, etc.

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    // function getMessage() public view returns (string) {
    //     return message;
    // }
}