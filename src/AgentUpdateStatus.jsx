import axios from 'axios';
import './login.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
function AgentUpdateStatus(props) {
    debugger
    const[data,setData] = useState({
        enquiryId:props.location.state.eid,
        enquiryDate:props.location.state.enquiry_date,
        status:''
    })

    let history = useHistory();
  var handleChange=(args)=>{
     var copyOfuser = {...data};
     copyOfuser[args.target.name] = args.target.value;
     setData(copyOfuser);

  }

  var handleUpdate = ()=>{
    debugger
    const url = 'Agent';
    axios.post(url,{
        eid:data.enquiryId,
        enquiry_status:data.status
    })
        .then((response) => {
            debugger
            if(response.status===200){
                history.push("/AgentDashboard");
            }

        })
        .catch((error) => {
            debugger
        })
  }
  
  return (
    <div className='cont-log'>
      <div>
        <form  method='post'  className='mx-auto' >

          <div class="form-outline mb-4 mt-5">
            <input type="text" id="form2Example1" name='EnquiryId' value={data.enquiryId} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example1">Enquiry ID</label>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form2Example2" name='EnquiryDate' value={data.enquiryDate} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2">Enquiry Date</label>
          </div>


          {/* <div class="form-outline mb-4">
            <input type="text" name='completionDate' value={data.completionDate} onChange={handleChange}class="form-control" />
            <label class="form-label" for="form2Example2">Completion Date</label>
          </div> */}

          

          <div class="form-outline mb-4">
          <select class="form-select" name='status' value={data.status} onChange={handleChange}>
            <option selected>Select one</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
               <label class="form-label" for="form2Example2">Status</label>
          </div>



          <button type="button" onClick={handleUpdate} class="btn btn-primary btn-block mb-4">Save</button>

        </form>
       

      </div>
    </div>
  )
}

export default AgentUpdateStatus;