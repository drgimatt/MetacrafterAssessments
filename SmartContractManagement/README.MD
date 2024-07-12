# Smart Contract Management - ETH + AVAX

This contains the necessary files for the module project Smart Contract Management - ETH + AVAX under the ETH + AVAX PROOF: Intermediate EVM Course by Metacrafters. The Smart Contract Management project demonstrates using Solidity, Hardhat, and Metamask together to create a Smart Contract that allows to deposit, withdraw funds between the owner and to an another account. 

## Description

This repository contains a .sol file which contains Solidity code that is written to adhere to the requirements specified in the Project page for "Smart Contract Management - ETH + AVAX". It is written to use variables, functions, events, and error handling functions. The smart contract allows the owner to make transactions at a specified rate as well as to see the transactions made throughout. This allows learners to understand how such different pieces of programs would interact and integrate with each other.

## Features

- Multiply the balance at a specified multiplier
- Divide the balance at a specified divisor
- Get a transaction history for the account in question

## Getting Started

### Opening the Contract

This contract is written in Solidity, as such, it can be run by any IDE that is configured to use Solidity. Since Hardhat and Metamask are required for this project. It is recommended to use Gitpod to simplify the process of setting up. To get started, go to https://www.gitpod.io/. Alternatively, one can setup the project to run locally by means of using npm to setup the node modules needed for the project.

### Running the Contract (via Gitpod)

To run the project, fork the project on Gitpod open three terminals in the project's directory. In the second terminal, run the command "npx hardhat node", and in the third terminal, run the command "npx hardhat run --network localhost scripts/deploy.js". In the first terminal, start the project by running "npm run dev", and open the url provided in the terminal.

### Running the Contract (Local Instance)

To run the project locally, download the project and open three terminals in the project's directory. In the first terminal, run the command "npm i". In the second terminal, run the command "npx hardhat node", and in the third terminal, run the command "npx hardhat run --network localhost scripts/deploy.js". In the first terminal, start the project by running "npm run dev", and open the url provided in the terminal.

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


