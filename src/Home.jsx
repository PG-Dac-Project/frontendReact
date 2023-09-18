import { useHistory } from 'react-router-dom'
import './Container.css'
import cardImage1 from './images/best-printer.jpg'
import cardImage2 from './images/printer1.jpg'
import cardImage3 from './images/printer2.webp'
import cardImage4 from './images/home-printer.png'
function Home(){
    let history=useHistory();
    var pushDriver=()=>{
        history.push("/Software&Drivers");
    }
    var pushPrintSupport=()=>{
        history.push("/printsupport");
    }
    var pushDashboard=()=>{
        history.push("/dashboard");
    }
    
    var pushCheckWarrenty=()=>{
        history.push("/CheckWarrenty");
    }
    var pushContactAgent=()=>{
        history.push("/ContactUs");
    }
    var pushFaq=()=>{
        history.push("/ViewFaq");
    }
    return(
        <div className="container-fluid ">
            <div className='Dashboard-div1-content'>
                <center>
                    <div className='container card-div'>
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage1} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushDriver}>Driver & Support {'>>'}</a>
                                </div>
                            </div>
                        </div>

                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage3} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushDashboard}>Dashboard {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage4} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushCheckWarrenty}>Check Warrenty Status {'>>'}</a>
                                </div>
                            </div>
                        </div>
                        <div className='one-card'>
                            <div class="card" >
                                <img style={{height:"250px"}} src={cardImage4} class="card-img-top" alt="create_inqury"></img>
                                <div class="card-body">
                                    <a href="/" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true" style={{ backgroundColor: 'blue', border: '0px' }} onClick={pushContactAgent}>Contect An Customer Agent {'>>'}</a>
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
export default Home;