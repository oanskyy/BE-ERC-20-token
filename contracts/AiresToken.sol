// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";  
// OpenZeppelin package contains implementation of the ERC 20 standard

contract AiresToken is ERC20 {
    uint constant _initial_supply = 100 * (10**18);  
    constructor() ERC20("AiresToken", "AIR") {
        _mint(msg.sender, _initial_supply);
    }
}


