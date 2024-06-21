// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract Comparator {

    address public owner;
    uint256 public value;


    modifier isOwner() {
        require(msg.sender == owner, "Caller isn't the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function setNumber(uint256 number) public isOwner {
        require(number > 0, "Number must be greater than 0");
        value = number;
    }

    function checkNumber () public view returns (string memory){
        assert(value >= 0);
        return string.concat("The current value set is ", uintToString(value));
    }

    function resetNumber() public isOwner {
        value = 0;
    }

    function compareNumber(uint256 number) public view returns (string memory) {
        if (number != value) {
            revert("Numbers are not equal");
        }
        return "Numbers are equal";
    }

    function uintToString(uint256 v) internal pure returns (string memory) {
        if (v == 0) {
            return "0";
        }
        uint256 j = v;
        uint256 length;
        while (j != 0) {
            length++;
            j /= 10;
        }
        bytes memory bstr = new bytes(length);
        uint256 k = length;
        while (v != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(v - v / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            v /= 10;
        }
        return string(bstr);
    }


}
