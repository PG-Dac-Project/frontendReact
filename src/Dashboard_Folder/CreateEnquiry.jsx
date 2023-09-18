import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import '../navbar_use.css'
import '../Container.css'
import './dashboard.css'
import axios from 'axios'
function CreateEnquiry() {
    let history = useHistory();
    const [enquiryDetails, setEnquiryDetails] = useState({ serialNumber: "", description: "", uid:"" });
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    var pushProductRegister = () => {
        history.push('/productregister')
    }
    var onTextChange = (args) => {
        var copyEnquiryDetails = { ...enquiryDetails };
        copyEnquiryDetails[args.target.name] = args.target.value;
        setEnquiryDetails(copyEnquiryDetails);
    }
    // var refresh=()=>{
    //     window.location.reload();
    // }

    var onProductRegister = () => {
        debugger;
        var uid= window.localStorage.getItem('uid');

        const url = `Enquiry/${enquiryDetails.serialNumber}`;
        axios.put(url,
            {
                serialNumber: enquiryDetails.serialNumber,
                description: enquiryDetails.description,
                uid:uid
            })
            .then((response) => {
                debugger
              //  console.log(response.data);
                //setData(response.data)
                if(response.data==0)
                {
                    Swal.fire(
                        'Sorry!',
                        'Please register product first',
                        'question'
                      )
                }
                else if(response.data==1)
                {
                        Swal.fire(
                            'Your Enquiry is Accepted',
                            'success'
                          )
                        .then(()=>{
                            history.push('/Dashboard')
                        })
                    }
                   
                   
                } )
           
            .catch((error) => {
                debugger
                setError(error)
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
    // useEffect(()=>{
    //     
    // },[])
    return (
        <div className='cont-log' method='post'>
            <div>
                <form method='post' className='mx-auto'>
                    <h4 className='text-center'> Create Enquiry</h4>
                    {/* <div class="form-outline mb-4 mt-5">
                        <input type="text" id="form2Example1" class="form-control" />
                        <label class="form-label" for="form2Example1">Model Name</label>
                    </div> */}


                    {/* <div class="form-outline mb-4">
                        <input type="hidden" id="form2Example2" class="form-control" name='userId' value={3} />
                        <label class="form-label" for="form2Example2">Puchase Date</label>
                    </div> */}

                    <div className="form-outline mb-4">
                        <input type="text" onChange={onTextChange} id="form2Example3" className="form-control" name='serialNumber' value={enquiryDetails.serialNumber} />
                        <label className="form-label" for="form2Example3">Product Serial Number</label>
                    </div>

                    <div className="form-outline mb-4">
                        <textarea className="form-control md-4" onChange={onTextChange} placeholder="Leave description here" id="floatingTextarea2" name='description' value={enquiryDetails.description} style={{ height: 100 }}></textarea>
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


                    <button type='button' className="btn btn-primary btn-block mb-4" onClick={onProductRegister}>Submit</button>
                    <button type='button' className="btn btn-primary btn-block mb-4" onClick={pushProductRegister}>Product Register</button>


                    {/* <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div> */}
                </form>
            </div>
        </div>

    )
}
export default CreateEnquiry;