# Degen Token (ERC-20): Unlocking the Future of Gaming

This contains the necessary files for the module project Degen Token (ERC-20): Unlocking the Future of Gaming under the ETH + AVAX PROOF: Intermediate EVM Course by Metacrafters. The Smart Contract Management project demonstrates using Solidity, Hardhat, and Metamask together to create a Smart Contract that allows a contract to be deployed on the Fuji-C Network and to be interacted with.

## Description

This repository contains a .sol file which contains Solidity code that is written to adhere to the requirements specified in the Project page for "Degen Token (ERC-20): Unlocking the Future of Gaming". It is written to use variables, functions, events, and error handling functions. 

The smart contract allows the owner to create new tokens that can be distributed to other players, transfer tokens from one person to another, redeem tokens in the store, check the token balance, and burn a certain amount of tokens.

## Features

- Minting new tokens
- Transferring tokens
- Redeeming tokens
- Checking token balance
- Burning tokens
- Store Items

## Getting Started

### Opening the Contract

This contract is written in Solidity, as such, it can be run by any IDE that is configured to use Solidity. Since Hardhat and Metamask are required for this project. It is recommended to use Remix to simplify the process of setting up. To get started, go to https://www.remix.ethereum.org/. 

### Running the Contract (via Gitpod)

To run the project, fork the project on Gitpod open three terminals in the project's directory. In the second terminal, run the command "npx hardhat node", and in the third terminal, run the command "npx hardhat run --network localhost scripts/deploy.js". In the first terminal, start the project by running "npm run dev", and open the url provided in the terminal.

### Connecting Metamask to the Contract

Open Metamask and select the "Add Account or Hardware Wallet" option, click the "Import Account" option. In the Second terminal, copy the private key of the very first account mentioned and paste the private key to Metamask and save. In the settings of Metamask, select "Network" and add a new network. Set the following parameters and save.

- Name: Localhost
- RPC URL: http://127.0.0.1:8545
- Chain ID: 31337
- Symbol: ETH

Please ensure that "npx hardhat node" is executed and the RPC url is accessible.

## Author

drgimatt

[@drgimatt](https://github.com/drgimatt)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details


