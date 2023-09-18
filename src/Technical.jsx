import './navbar_use.css'
import './Container.css'
//import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function Technical() {
    const[viewEnquiryData,setViewEnquiryData]=useState([]);
    //let history=useHistory();
    // var pushUpdateEnquiry=(eid)=>{
    //     debugger
    //     history.push('/UpdateEnquiry',eid)
    // }
    
    useEffect(()=>{
        debugger
        var uid=window.localStorage.getItem('uid');
        axios.get(`Technical/${uid}`)
        .then((response)=>{
            debugger
            var data=response.data;
            setViewEnquiryData(data);
        })
        .catch((error)=>{
            debugger
            if(error!=null)
            {
                Swal.fire(
                    'Sorry!',
                    'Something went wrong',
                    'question'
                    )
            }
        })
    },[])
    return (
        <div className='container-fluid' style={{backgroundColor:"white"}}>
         
                    <div class="table-responsive">
                    <h4 className='text-center'>Enquiry Details</h4>
                        <table class="table align-middle">
                            <thead class="table-dark">
                                <tr>
                                    <th>Enquiry Id</th>
                                    <th>Customer Name</th>
                                    <th>Enquiry Date</th>
                                    <th>Completion Date</th>
                                    <th>Enquiry Status</th>
                                    <th>Description</th>
                                    
                                </tr>
                            </thead>
                            <tbody>{
                                viewEnquiryData.map((currentEnquiryData)=>{
                                return <tr key={currentEnquiryData.eid}>
                                        <td>{currentEnquiryData.eid}</td>
                                        <td>{currentEnquiryData.fname}</td>
                                        <td>{currentEnquiryData.enquiry_date}</td>
                                        <td>{currentEnquiryData.completion_date}</td>
                                        <td>{currentEnquiryData.enquiry_status}</td>
                                        <td>{currentEnquiryData.description}</td>
                                       
                                        {/* <td><button type='button' className='btn btn-primary'onClick={()=>{
                                            pushUpdateEnquiry(currentEnquiryData.eid)
                                        }}>Edit</button></td>              */}
                                </tr>
                                })
                            }</tbody>
                        </table>
                    </div>
                
        
        </div>
    )
}
export default Technical;