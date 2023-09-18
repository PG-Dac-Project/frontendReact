import '../navbar_use.css'
import '../Container.css'
import { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useEffect } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
function AgentDashboard() {

    const [data, setData] = useState([]);
    const [sdata, setSdata] = useState({
        $id: '',
        completion_date: '',
        description: '',
        eid: '',
        enquiry_date: '',
        enquiry_status: '',
        fname: '',
        pmodel_name: '',
        pserial_no: '',
        techid: '',
        techName:'',
        uid: ''
    })
let history = useHistory();
    
var handleAssignTo = (arg) =>{
    debugger
    history.push("/AssignedTo",arg);
}
    useEffect(() => {

        // const config = {
        //     headers:{
        //         Authorization:'Bearer '+localStorage.getItem('jwtToken')
        //     }
        // }

        const url = 'Agent';
        axios.get(url)
            .then((response) => {
                debugger
                var edata = response.data
                setData(edata);
                console.log(data);
            })
            .catch((error) => {
                debugger

                //unauthorized user
                if(error.response.status===401){
                    Swal.fire(
                        'Sorry!',
                        'Your are Unauthorized User??',
                        'error'
                      )
                      .then(() => {
                        localStorage.clear();
                        window.localStorage.removeItem("isLogin");
                        window.localStorage.removeItem("token");
                        history.push("/Login")
                        window.location.reload(true)
                        
                      })
                }
            })
    }, []);



    var handleStatus = (args) =>{
        debugger
        history.push("/AgentUpdateStatus",args);
    }
    return (
        <div className='container-fluid' style={{ backgroundColor: "white" }}>

            <div class="table-responsive">
                <h1>Admin page</h1>
                <table class="table align-middle">
                    <thead class="table-dark">
                        <tr>
                            <th>Eid</th>
                            <th>Customer Id</th>
                            <th>Customer name</th>
                            <th>Serial No</th>
                            <th>Model Name</th>
                            <th>Description</th>
                            <th>Equiry Date</th>
                            <th>Technical ID</th>
                            <th>Technical name</th>
                            <th>completion date</th>
                            <th>Enquiry status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((sdata) => {
                                return (
                                    <tr key={sdata.id}>
                                        <th>{sdata.eid}</th>
                                        <th>{sdata.uid}</th>
                                        <th>{sdata.fname}</th>
                                        <th>{sdata.pserial_no}</th>
                                        <th>{sdata.pmodel_name}</th>
                                        <th>{sdata.description}</th>
                                        <th>{sdata.enquiry_date}</th>
                                        <th>{sdata.techid}</th>
                                        <th>{sdata.techName}</th>
                                        <th>{sdata.completion_date}</th>
                                        <th>{sdata.enquiry_status}</th>
                                        <th>
                                        <button type="button" onClick={()=>{
                                            handleAssignTo(sdata)}} class="btn btn-primary btn-block mb-4">AssignTo</button>
                                        </th>
                                        <th>
                                        <button type="button" onClick={()=>{
                                            handleStatus(sdata)}} class="btn btn-primary btn-block mb-4"> Update Status</button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default AgentDashboard;