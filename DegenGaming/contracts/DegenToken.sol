// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";

contract DegenToken is ERC20, Ownable {

    struct product {
        uint price;
        string itemName;
        bool isRedeemed;
    }

    product[] private assets;

    constructor() ERC20("Degen", "DGN") {
        assets.push(product(12, "Rowlett", false));
        assets.push(product(16, "Luna", false));
        assets.push(product(2, "Kirby", false));
        assets.push(product(10, "Molly", false));
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function decimals() override public pure returns (uint8) {
        return 0;
    }

    function getBalance() external view returns (uint256) {
        return this.balanceOf(msg.sender);
    }

    function transferTokens(address _receiver, uint256 _value) external {
        require(balanceOf(msg.sender) >= _value, "You do not have enough Degen Tokens");
        approve(msg.sender, _value);
        transferFrom(msg.sender, _receiver, _value);
    }

    function burnTokens(uint256 _value) external {
        require(balanceOf(msg.sender) >= _value, "You do not have enough Degen Tokens");
        _burn(msg.sender, _value);
    }

    function redeemTokens(uint8 input) external payable returns (string memory) {
        require(input >= 0 || input <= 3, "Invalid Input");
        require(assets[input].isRedeemed == false, "This item is already redeemed!");
        require(balanceOf(msg.sender) >= assets[input].price, "You do not have enough Degen Tokens");

        approve(msg.sender, assets[input].price);
        transferFrom(msg.sender, owner(), assets[input].price);
        assets[input].isRedeemed = true;

        return string.concat(assets[input].itemName ," has been redeemed!");
    }

    function showAssets() public view returns (string memory) {
        string memory listing = "";

        for (uint i = 0; i < 4; i++) {
            listing = string.concat(listing, "   ", Strings.toString(i), ". ", assets[i].itemName);
        }

        return listing;
    }


}
