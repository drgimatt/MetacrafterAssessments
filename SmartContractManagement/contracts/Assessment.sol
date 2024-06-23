//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

//import "hardhat/console.sol";

contract Assessment {
    address payable public owner;
    uint256 public balance;

    event ShowAddress(address owner);
    event Deposit(uint256 amount);
    event Withdraw(uint256 amount);
    event VerifiedAddress(address indexed addr, bool isValid);
    event AccessTransaction(address indexed origin, address indexed destination, uint256 amount);
    event TransactionEvent(address indexed addr, uint256 amount, bool isDeposit);


    constructor(uint initBalance) payable {
        owner = payable(msg.sender);
        balance = initBalance;
    }

    struct Transaction {
        uint256 amount;
        bool isDeposit;
        uint256 timestamp;
    }

    mapping(address => uint256) private balances;
    mapping(address => Transaction[]) private transactionHistory;

    function getBalance() public view returns(uint256){
        return balance;
    }

    function showAddress() public {
        emit ShowAddress(owner);
    }

    function deposit(uint256 _amount) public payable {
        uint _previousBalance = balance;

        // make sure this is the owner
        require(msg.sender == owner, "You are not the owner of this account");

        // make sure that amount deposited is greater than 0
        require (_amount > 0, "Amount must be greater than 0");

        // perform transaction
        balance += _amount;
        balances[msg.sender] += _amount;
        transactionHistory[msg.sender].push(Transaction(_amount, true, block.timestamp));

        // assert transaction completed successfully
        assert(balance == _previousBalance + _amount);

        // emit the event
        emit Deposit(_amount);
        emit TransactionEvent(msg.sender, _amount, true);
    }

    // custom error
    error InsufficientBalance(uint256 balance, uint256 withdrawAmount);

    function withdraw(uint256 _withdrawAmount) public {
        require(msg.sender == owner, "You are not the owner of this account");
        uint _previousBalance = balance;
        if (balance < _withdrawAmount) {
            revert InsufficientBalance({
                balance: balance,
                withdrawAmount: _withdrawAmount
            });
        }

        // withdraw the given amount
        balance -= _withdrawAmount;
        balances[msg.sender] -= _withdrawAmount;
        transactionHistory[msg.sender].push(Transaction(_withdrawAmount, false, block.timestamp));


        // assert the balance is correct
        assert(balance == (_previousBalance - _withdrawAmount));

        // emit the event
        emit Withdraw(_withdrawAmount);
        emit TransactionEvent(msg.sender, _withdrawAmount, false);

    }

    function getTransactionHistory(address _addr) public view returns (Transaction[] memory) {
        return transactionHistory[_addr];
    }

}
