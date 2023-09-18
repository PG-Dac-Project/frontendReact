import { useHistory } from 'react-router-dom'
import '../navbar_use.css'
import '../Container.css'
import './dashboard.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
function UpdateEnquiry(props) {
    const[updateEnquiryData,setUpdateEnquiryData]=useState({eid:"",enquiry_date:"",completion_date:"",enquiry_status:"",description:""})
    let history=useHistory();
    var pushProductRegister=()=>{
        history.push('/productregister')   
    }
    useEffect(()=>{
        debugger
        axios.get(`UpdateEnquiry/${props.location.state}`)
        .then((response)=>{
            debugger
            if(response.status===200)
            {
                debugger
                  var data=response.data;
                  setUpdateEnquiryData(data);               
            }
        })
        .then((error)=>{
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
    var onTextChange=(args)=>{
        var copyUpdateEnquiryDeta={...updateEnquiryData};
        copyUpdateEnquiryDeta[args.target.name]=args.target.value;
        setUpdateEnquiryData(copyUpdateEnquiryDeta);
    }
    var updateEnquiryDetails=()=>{
        debugger
        axios.post("Enquiry",{
            eid:updateEnquiryData.eid,
            enquiry_date:updateEnquiryData.enquiry_date,
            completion_date:updateEnquiryData.completion_date,
            enquiry_status:updateEnquiryData.enquiry_status,
            description:updateEnquiryData.description
        })
        .then((response)=>{
            debugger
            if(response.status===200)
            {
                if(response.data!=null)
                {
                    Swal.fire(
                        'Congrats',
                        'your Enquiry is Updated',
                        'success'
                      )
                    .then(()=>{
                        history.push('/ViewEnquiryStatus')
                    })
                }
            }
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
    }
    return (
        <div className='cont-log'>
            <div>
                <form className='mx-auto' method='post'>
                    <h4 className='text-center'> Update Enquiry</h4>
                    <div class="form-outline mb-4 mt-5">
                        <input type="hidden" name='eid' value={updateEnquiryData.eid} id="form2Example1" class="form-control" />
                        {/* <label class="form-label" for="form2Example1">Enquiry Id</label> */}
                    </div>


                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} type="text" name='enquiry_date' value={updateEnquiryData.enquiry_date} id="form2Example2" class="form-control" disabled='true' />
                        <label class="form-label" for="form2Example2">Enquiry Date</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} name='enquiry_status' value={updateEnquiryData.enquiry_status} type="text" id="form2Example3" class="form-control" disabled='true' />
                        <label class="form-label" for="form2Example3">Enquiry Status</label>
                    </div>

                    <div class="form-outline mb-4">
                        <textarea onChange={onTextChange} name='description' value={updateEnquiryData.description} class="form-control md-4" placeholder="Leave description here" id="floatingTextarea2" style={{height: 100}}></textarea>
                        <label for="floatingTextarea2">Description</label>
                    </div>
                    {/* <div class="row mb-4">
            <div class="col d-flex justify-content-center">

              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                <label class="form-check-label" for="form2Example34"> Remember me </label>
              </div>
            </div>

            <div class="col">

              <a href="#!">Forgot password?</a>
            </div>
          </div> */}


                    <button onClick={updateEnquiryDetails} type="button" class="btn btn-primary btn-block mb-4">Submit</button>
                    {/* <button  class="btn btn-primary btn-block mb-4" onClick={pushProductRegister}>Product Register</button> */}


                    {/* <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div> */}
                </form>
            </div>
        </div>

    )
}
export default UpdateEnquiry;