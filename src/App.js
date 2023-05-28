import { useEffect, useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import abi from "./utilities/ABI.json";
import Web3 from "web3";
import { CONTRACT_ADDRESS } from "./utilities/config";
import { addWallet } from "./utilities/WalletSlice";
import { useDispatch } from "react-redux";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);


function App() {

  const [account, setAccount] = useState();
  useEffect(() => {
    if(!window.ethereum) console.log("Install metamask")
    else console.log("Metamask found!!!");
    getLists();
  }, [account]);
  const dispatch = useDispatch();
  const getAndSetAccount = async () => {
    const changedAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    var balance = await web3.eth.getBalance(changedAccounts[0]);
    const balanceEther = web3.utils.fromWei(balance, 'ether');
    console.log(balanceEther);
    setAccount(changedAccounts[0]);
    dispatch(addWallet({add:changedAccounts, balance:balanceEther}));
  }
  
  const addList = () => {
    contract.methods.createTodoList("list1").send({
      from: '0x4Fb6BCd83316E2c0A176fEe5383807f85aEE95F2',
      gas: 200000, // Adjust the gas limit as needed
      gasPrice: '5000000000', // Adjust the gas price as needed
    })
    .then(receipt => {
      console.log('Transaction receipt:', receipt);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const addTodo = () => {
    contract.methods.addTodoItem(0,"item1").send({
      from: '0x4Fb6BCd83316E2c0A176fEe5383807f85aEE95F2',
      gas: 200000, // Adjust the gas limit as needed
      gasPrice: '5000000000', // Adjust the gas price as needed
    })
    .then(receipt => {
      console.log('Transaction receipt:', receipt);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const getTodos = () => {
    contract.methods
      .getTodoListItems(0)
      .call({ from: '0x4Fb6BCd83316E2c0A176fEe5383807f85aEE95F2' })
      .then((result) => {
        console.log(result); // Handle the result of the function call
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during the function call
      });
  };


  const getLists = () => {
    contract.methods
      .getTodoLists()
      .call(({ from: '0x4Fb6BCd83316E2c0A176fEe5383807f85aEE95F2' }))
      .then((result) => {
        console.log(result); // Handle the result of the function call
      })
      .catch((error) => {
        console.error(error); // Handle any errors that occur during the function call
      });
  };

  if(!account) return <button onClick={getAndSetAccount}>Connect Wallet</button>
  return (
    <div className="w-full h-screen ">
      <button className="mr-2 bg-green-200" onClick={addList}>Add list</button>
      <button className="mr-2 bg-green-200" onClick={addTodo}>Add todo</button>
      <button className="mr-2 bg-green-200" onClick={getTodos}>GetTodos</button>
      <button className="mr-2 bg-green-200" onClick={getLists}>Get Lists</button>
      <Header />
      <Body />
    </div>
  );
}

export default App;
