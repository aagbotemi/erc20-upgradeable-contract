// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import "./Proxiable.sol";

contract MyTokenA is ERC20("Gbotemi Token", "GBT"), Proxiable {
    address public owner;
    string tokenName;
    string tokenSymbol;

    modifier onlyOwner() {
        require(owner == msg.sender, "Only owner is allowed to perform this action!!");
        _;
    }

    function initialize() public {
        require(owner == address(0), "Already initalized");
        owner = msg.sender;
        _mint(address(this), 10000e18);
        tokenName = "Gbotemi Token";
        tokenSymbol = "GBT";
    }

    function mintToken (address recieverAddr, uint amount) public  {
        _mint(recieverAddr, amount);
    }

    function name() public view virtual override returns (string memory) {
        return tokenName;
    }
    
    function symbol() public view virtual override returns (string memory) {
        return tokenSymbol;
    }

    function encode() external pure returns (bytes memory) {
        return abi.encodeWithSignature("initialize()");
    }

    function updateCode(address newCode) onlyOwner public {
        updateCodeAddress(newCode);
    }
}
