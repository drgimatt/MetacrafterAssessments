# Degen Token (ERC-20): Unlocking the Future of Gaming

This contains the necessary files for the module project Degen Token (ERC-20): Unlocking the Future of Gaming under the ETH + AVAX PROOF: Intermediate EVM Course by Metacrafters. The Smart Contract Management project demonstrates using Solidity, Hardhat, and Metamask together to create a Smart Contract that allows a contract to be deployed on the Fuji-C Network and to be interacted with.

## Description

This repository contains a .sol file which contains Solidity code that is written to adhere to the requirements specified in the Project page for "Degen Token (ERC-20): Unlocking the Future of Gaming". It is written to use variables, functions, events, and error handling functions. The smart contract allows the owner to create new tokens that can be distributed to other players, transfer tokens from one person to another, redeem tokens in the store, check the token balance, and burn a certain amount of tokens.

## Features

- Minting new tokens
- Transferring tokens
- Redeeming tokens
- Checking token balance
- Burning tokens
- Store Items

## Getting Started

### Opening the Contract

This contract is written in Solidity, as such, it can be run by any IDE that is configured to use Solidity. Since Hardhat and Metamask are required for this project. It is recommended to use Remix to simplify the process of setting up. To get started, go to https://remix.ethereum.org/. 

### Running the Contract (via Remix)

To run the project, fork the project and on the project's directory, open a terminal and run the command `remixd`. Open Remix and select the "File Explorer" tab. Under the "Workspaces", choose and select the "connect to localhost". Click "Connect". Under the "Solidity compiler" tab, click the Compile button. Switch to the "Deploy & run transactions" tab. Under the "Environment", select the "Injected Provider - Metamask". Check the metamask wallet and see if connected to the Avalanche Fuji Testnet. To deploy, press the "Deploy" button. Beside at the "At Address" button, paste the code below and click the button.

My Deployed Contract:
`0xFF0032671020925226233EDDD8d402572f123D0E`

If you want to deploy your own contract instead, on a different terminal run this command and copy the address provided: `npx hardhat run scripts/deploy.js --network fuji`

## Author

drgimatt

[@drgimatt](https://github.com/drgimatt)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details


