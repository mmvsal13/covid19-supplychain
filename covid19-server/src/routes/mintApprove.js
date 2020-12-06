import web3 from 'web3'
//Kentaro's Infura acct
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/12734ccdeec244cda4d727916d6a83e8"));
import axios from 'axios';
import COVID19Token from '../../build/contracts/COVID19Supplychain.json'

const tokenAddress = "0x90c1450451621D98779020b39b8951d94de1fDc2"

//get the request by ID(Each request will have a uniqe ID)


//get toAddress, amount_to_mint,  from get function


// Get Token contract instance
let contract = web3.eth.Contract(COVID19Token.abi, tokenAddress);

//mint COVID19 token with metadata from approved account using FDA account
contract.mint(amount_to_mint);

// call transfer function to sent to approved account

contract.transfer(toAddress, (error, txHash) => {
  // it returns tx hash because sending tx
  console.log(txHash);
});