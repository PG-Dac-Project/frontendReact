import axios from 'axios';
import './login.css'

 import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function ResetPassword() {

  const[reset,setReset] = useState({password:'',cpassword:''});

   let history = useHistory();

  var formValue = (args)=>{
    var copyOfpass = { ...reset }
    copyOfpass[args.target.name] =
      args.target.value;
    setReset(copyOfpass);
  }
  var restPass = ()=>{
    debugger
    var semail = window.sessionStorage.getItem("email");
    var url = 'RestPass';
    debugger
    axios.post(url,{
      passwd:reset.password,
      email:semail
    })
    .then((response)=>{
        if(response.status===200){
          history.push("/Login");
        }
    })
    .catch((error)=>{
      debugger
    })
  }

  return (
    <div className='cont-log'>
      <div>
        <form method='post'  className='mx-auto'>
          <h4 style={{color:"green"}} className='text-center'>Otp is send to this mail {window.sessionStorage.getItem("email")}</h4>
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" name='password' value={reset.password} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" name='cpassword' value={reset.cpassword} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example2">Confirm Password</label>
          </div>



          <button type="button" class="btn btn-primary btn-block mb-4" onClick={restPass}  >Reset Password</button>


          <div class="text-center">
            {/* <p>{msg}</p> */}
          </div>
        </form>
      </div>
    </div>


  );
}
export default  ResetPassword;