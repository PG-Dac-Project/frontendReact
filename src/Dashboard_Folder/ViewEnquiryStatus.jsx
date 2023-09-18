import '../navbar_use.css'
import '../Container.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function ViewEnquiryStatus() {
    const[viewEnquiryData,setViewEnquiryData]=useState([]);
    let history=useHistory();
    var pushUpdateEnquiry=(eid)=>{
        debugger
        history.push('/UpdateEnquiry',eid)
    }
    var uid=window.localStorage.getItem('uid');
    useEffect(()=>{
        debugger
        axios.get(`Enquiry/${uid}`)
        .then((response)=>{
            var data=response.data;
            setViewEnquiryData(data);
        })
        .catch((error)=>{
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
                                    <th>Model Name</th>
                                    <th>Product Serial Number</th>
                                    <th>Description</th>
                                    <th>Enquiry Date</th>
                                    <th>Completion Date</th>
                                    <th>Enquiry Status</th>
                                </tr>
                            </thead>
                            <tbody>{
                                viewEnquiryData.map((currentEnquiryData)=>{
                                return <tr key={currentEnquiryData.eid}>
                                        <td>{currentEnquiryData.eid}</td>
                                        <td>{currentEnquiryData.pmodel_name}</td>
                                        <td>{currentEnquiryData.pserial_no}</td>
                                        <td>{currentEnquiryData.description}</td>
                                        <td>{currentEnquiryData.enquiry_date}</td>
                                        <td>{currentEnquiryData.completion_date}</td>
                                        <td>{currentEnquiryData.enquiry_status}</td>
                                        <td><button type='button' className='btn btn-primary'onClick={()=>{
                                            pushUpdateEnquiry(currentEnquiryData.eid)
                                        }}>Edit</button></td>             
                                </tr>
                                })
                            }</tbody>
                        </table>
                    </div>
                
        
        </div>
    )
}
export default ViewEnquiryStatus;