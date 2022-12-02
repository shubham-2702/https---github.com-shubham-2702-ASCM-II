import React, {useState,useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import img2 from '../../assets/img/gallery/logo-icon.png'
import './InitializeContract.css'
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "../../utils/loadContract";
import { paymentContractAbi,paymentContractAddress,customerContractAbi,customerContractAddress } from "./StoreAbi";
import Web3 from "web3";


let web3;
let payment;
let customer;
let provider;
const InitializeContract = () => {
    const location = useLocation()
    const { details } = location.state;
    console.log(details);
    const [account,setAccount]=useState(null);
    //const [balance,setBalance]=useState(0);
    const [reciever,setReceiver]=useState(details.address);
    //var value=toString("0.003839")
    const [deposit,setDeposit]=useState("0.003839");
    const setAccountListener = (provider) => {
        provider.on("accountsChanged", (accounts) => {
          setAccount(accounts[0]);
          console.log(accounts[0]);
        });
      };

      useEffect(() => {
        const loadProvider = async () => {
          provider = await detectEthereumProvider();
         
          if (provider) {
            setAccountListener(provider);
            provider.request({method: "eth_requestAccounts"});
          } else {
            console.error("Please install MetaMask!");
          }
          if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(provider);
        }
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        // const bal=web3.eth.getBalance(web3.eth.accounts[0]);
        // setBalance(bal);
        // payment = await loadContract("Payment", provider);
        payment = new web3.eth.Contract(
            paymentContractAbi,
            paymentContractAddress
          )
          customer = new web3.eth.Contract(
            customerContractAbi,
            customerContractAddress
          )
         console.log(payment);
         console.log(customer);
        };
    
        loadProvider();
      }, []);
    
    const initiatePayment=async()=>{
        // if(balance>=deposit)
        // {
            console.log(account);
          //  console.log(balance);
            console.log(reciever);
            console.log(deposit);
            await payment.methods.initiatePaymentContract(reciever,"5000","3000").send
            ({
                from:account,
                value:web3.utils.toWei(deposit,"ether"),
                gasLimit:3000000
            })
        // }
        // else{
        //     alert("Please Enter Amount less than balance to transfer");
        // }
    }
    const confirmOrder=async()=>{
        // if(balance>=deposit)
        // {
            console.log(account);
          //  console.log(balance);
            console.log(reciever);
            console.log(deposit);
            await customer.methods.confirmOrder(reciever).send
            ({
                from:account,
                gasLimit:3000000
            })
        // }
        // else{
        //     alert("Please Enter Amount less than balance to transfer");
        // }
    }
    const changeDeposit=(e)=>{
        setDeposit(e.target.value);
    }
    const changeReciever=(e)=>{
        setReceiver(e.target.value);
    }

    return (
        <div style={{ marginTop: `10px` }}>

            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light opacity-85" data-navbar-on-scroll="data-navbar-on-scroll">
                <div class="container"><a class="navbar-brand" href="index.html"><img class="d-inline-block align-top img-fluid" src={img2} alt="" width="50" /><span class="text-theme font-monospace fs-4 ps-2">AgriChain</span></a>
                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-2"><a class="nav-link fw-medium active" aria-current="page" href="/">Home</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="/initializeContract">Initialize Contract </a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="/confirmRecipt">Confirm Recipt</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="/returnItem">Return Item</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="/cancelOrder">Cancel Order</a></li>
                            <li class="nav-item px-2"><a class="nav-link fw-medium" href="/releaseAmount">Release Amount</a></li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-lg btn-dark bg-gradient order-0" type="submit">Logout</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
                <div class="wrapper wrapper--w960">
                    <div class="card card-2">
                        <div class="card-heading" ></div>
                        <div class="card-body" >
                            <h2 class="title"> Initialize Contract</h2>
                            <form method="POST">
                                <div >
                                    <p style={{fontSize: `18px`}}> <mark >Here Customer sets up the AgriChain contract</mark></p>
                                    <br></br>
                                </div>
                                <div class="row row-space">
                                    <div style={{ marginBottom: `20px` }}>
                                        <div>
                                            <h5>Coinbase Address: {account?account:"Connect Metamask!!"}</h5>
                                            <br/>
                                            {/* <h5>Coinbase Balance: {balance}</h5> */}
                                        </div>
                                    </div>
                                    
                                </div>
                                
                                <div class="row row-space">
                                    <div >
                                        <div class="input-group">
                                            <input class="form-control" onKeyUp={e => changeReciever(e)} type="text" disabled placeholder={details.address} />
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="row row-space">
                                    <div >
                                        <div class="input-group">
                                             <input class="form-control" type="text" placeholder="Time to Expiry"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="row row-space">
                                    <div  >
                                        <div class="input-group">
                                             <input class="form-control" type="text" placeholder="Time to Return"/>
                                        </div>
                                    </div>
                                </div> */}

                                <div class="row row-space">
                                    <div  >
                                        <div >
                                             <input class="form-control" type="text" onKeyUp={e => changeDeposit(e)} disabled placeholder={400*0.0000096}ETH/>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-t-30">
                                    <button type="button" class="btn btn-warning" onClick={()=>initiatePayment()}>Initialize Contract</button>
                                </div>

                                <div class="p-t-30" style= {{justifyContent: `center`, marginLeft: `320px`, marginTop: `50px`}} >
                                    <button type="button" class="btn btn-success" onClick={()=>confirmOrder()}>Confirm Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

               

        </div>
    )
}

export default InitializeContract