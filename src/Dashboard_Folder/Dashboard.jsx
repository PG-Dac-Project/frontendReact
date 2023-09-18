import {useHistory } from "react-router-dom";
// import CreateEnquiry from "./CreateEnquiry"
// import UpdateEnquiry from "./UpdateEnquiry";
// import ViewEnquiryStatus from "./ViewEnquiryStatus";
// import ViewFaq from "./ViewFaq";
import './dashboard.css'
import '../navbar_use.css'
import '../Container.css'
import cardImage1 from '../images/best-printer.jpg'
import cardImage2 from '../images/printer1.jpg'
import cardImage3 from '../images/printer2.webp'
import cardImage4 from '../images/home-printer.png'
import { useEffect, useState } from "react";

function Dashboard() {
    
    let history=useHistory();
    useEffect(() => {
        debugger
          var check = window.localStorage.getItem("isLogin");
       if(check==null){
        history.push("/Login");
       }
       else{
        const r = window.localStorage.getItem("role");
        if(r === "Agent"){
            history.push("/AgentDashboard")
          }
          else if(r === "Technical"){

              history.push("/Technical");
          }
          else{
            history.push("/Dashboard")
          }
       }
    });

    
    var pushEnquiry=()=>{
        history.push("/CreateEnquiry");
    }
    var pushUpdate=()=>{
        history.push("/ProductDetails");
    }
    var pushViewUpdate=()=>{
        history.push("/ViewEnquiryStatus");
    }
    var pushFaq=()=>{
        history.push("/ViewFaq");
    }
    return (
        <div className="container-fluid ">
        
            <div className='Dashboard-div1-content'>
                <center>
                
                    <div className='container card-div'>
                        
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage1} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushEnquiry}>Create Enquiry {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage2} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushUpdate}>Update Product {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage3} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushViewUpdate}>View Enquiry {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage4} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushFaq}>View FAQ {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </center>
            </div>
        </div>
    )
}
export default Dashboard;