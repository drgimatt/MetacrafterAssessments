// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERCToken is ERC20 {
    constructor() ERC20("Prism", "PSM"){
        _mint(msg.sender, 100*10 ** decimals());
    }

}
