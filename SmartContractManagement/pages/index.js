import {useState, useEffect} from "react";
import {ethers} from "ethers";
import atm_abi from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [atm, setATM] = useState(undefined);
  const [balance, setBalance] = useState(undefined);
  const [ownerAddress, setOwnerAddress] = useState(undefined);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [multiplier, setMultiplier] = useState(1);
  const [divisor, setDivisor] = useState(1);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const atmABI = atm_abi.abi;

  const getWallet = async () => {
    if (window.ethereum) {
      setEthWallet(window.ethereum);
    }

    if (ethWallet) {
      const account = await ethWallet.request({ method: "eth_accounts" });
      handleAccount(account);
    }
  }

  const handleAccount = (account) => {
    if (account) {
      console.log("Account connected: ", account);
      setAccount(account);
    } else {
      console.log("No account found");
    }
  }

  const connectAccount = async () => {
    if (!ethWallet) {
      alert('MetaMask wallet is required to connect');
      return;
    }

    const accounts = await ethWallet.request({ method: 'eth_requestAccounts' });
    handleAccount(accounts);

    // once wallet is set we can get a reference to our deployed contract
    getATMContract();
  };

  const getATMContract = () => {
    const provider = new ethers.providers.Web3Provider(ethWallet);
    const signer = provider.getSigner();
    const atmContract = new ethers.Contract(contractAddress, atmABI, signer);

    setATM(atmContract);
  }

  const getBalance = async () => {
    if (atm) {
      setBalance((await atm.getBalance()).toNumber());
    }
  }

  const deposit = async () => {
    if (atm) {
      let tx = await atm.deposit(1);
      await tx.wait();
      getBalance();
    }
  }

  const withdraw = async () => {
    if (atm) {
      let tx = await atm.withdraw(1);
      await tx.wait();
      getBalance();
    }
  }

  const getTransactionHistory = async () => {
    if (atm) {
      const history = await atm.getTransactionHistory(account[0]);
      setTransactionHistory(history);
    }
  }

  const multiplyBalance = async () => {
    if (atm) {
      try {
        const tx = await atm.multiplyBalance(multiplier); 
        await tx.wait();
        getBalance();
      } catch (error) {
        console.error(error);
      }
    }
  };


  const divideBalance = async () => {
    if (atm) {
      try {
        const tx = await atm.divideBalance(divisor); 
        await tx.wait();
        getBalance();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const initUser = () => {
    // Check to see if user has Metamask
    if (!ethWallet) {
      return <p>Please install Metamask in order to use this ATM.</p>
    }

    // Check to see if user is connected. If not, connect to their account
    if (!account) {
      return <button onClick={connectAccount}>Please connect your Metamask wallet</button>
    }

    if (balance == undefined) {
      getBalance();
    }

    return (
      <div>
        <p>Account: {account}</p>
        <p>Balance: {balance} ETH</p>
        <div>
          <label>Multiply by: </label>
          <input type="number" value={multiplier} onChange={(e) => setMultiplier(e.target.value)} />
          <button onClick={multiplyBalance}>Multiply</button>
        </div>
        <div>
          <label>Divide by: </label>
          <input type="number" value={divisor} onChange={(e) => setDivisor(e.target.value)} />
          <button onClick={divideBalance}>Divide</button>
        </div>
        <button onClick={getTransactionHistory}>Get Transaction History</button>
        {ownerAddress && <p>Owner Address: {ownerAddress}</p>}
        {transactionHistory.length > 0 && (
          <div>
            <h3>Transaction History:</h3>
            <ul>
              {transactionHistory.map((tx, index) => (
                <li key={index}>
                  {tx.isDeposit ? "Deposit" : "Withdraw"} of {tx.amount.toNumber()} ETH at {new Date(tx.timestamp.toNumber() * 1000).toLocaleString()} 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }

  useEffect(() => { getWallet(); }, []);

  return (
    <main className="container">
      <header><h1>Welcome to an Localhost ATM!</h1></header>
      {initUser()}
      <style jsx>{`
        .container {
          text-align: center
        }
      `}
      </style>
    </main>
  )
}
