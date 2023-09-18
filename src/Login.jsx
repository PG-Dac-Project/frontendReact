import axios from 'axios';
import './login.css'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
function Login() {
  const [Login, setLogin] = useState({ email: '', password: '' });
   

  const [errors, setErrors] = useState({});
  let history = useHistory();

  var formValue = (args) => {

    var copyOfLogin = { ...Login }
    copyOfLogin[args.target.name] =
      args.target.value;
    setLogin(copyOfLogin);

  }

// validation
function validateForm() {
  let valid = true;
  const newErrors = {};

 // email 
  if (!Login.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    newErrors.email = 'Invalid email address';
    valid = false;
  }
    // Add password validation (e.g., minimum length of 8 characters)
  if (Login.password.length < 8) {
     newErrors.password = 'Password must be at least 8 characters long';
     valid = false;
  }


  setErrors(newErrors);
  return valid;
}

// validation for forget password
function validateFormForForgetPassword() {
  let valid = true;
  const newErrors = {};
  if (!Login.email.trim() === '') {
    newErrors.email = ' email address required ';
    valid = false;
  }

 // email 
  if (!Login.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    newErrors.email = 'Invalid email address';
    valid = false;
  }



  setErrors(newErrors);
  return valid;
}
// After the Login method is called
  var checkUser = () => {
    if(validateForm())
    {
      debugger
    const url = 'Users';
    axios.post(url, {
      email: Login.email,
      passwd: Login.password
    })
      .then((response) => {
        debugger
        if (response.status === 200) {
           // store the token 
          window.localStorage.setItem("jwtToken",response.data[1]) 

          window.localStorage.setItem('token', response.data[0].fname);

          window.localStorage.setItem('role',response.data[0].role);

          window.localStorage.setItem('uid',response.data[0].uid);

          window.localStorage.setItem('isLogin', true);
          if(response.data[0].role === "Agent"){
            history.push("/AgentDashboard")
          }
          else if(response.data[0].role === "Technical"){
            history.push("/Technical")
          }
          else{
            history.push("/Dashboard")
          }
          window.location.reload(false);
        }
        

      })
      .catch((error) => {
        debugger
        console.log(error.data)
      })
    }
  }
  var sendOtp=()=>{
    if(validateFormForForgetPassword())
    {
      debugger
    const url = `Email/?email=${Login.email}`;
    axios.get(url)
    .then((response)=>{
         debugger
         if(response.status ===200){
          window.sessionStorage.setItem("email",Login.email);
          history.push("/CheckOtp")
         }
    })
      .catch((error) => {
        debugger
        Swal.fire(
          'Sorry!',
          'Not a Registered email ID',
          'question'
        )
      })
    }

  }


  return (
    <div className='cont-log'>
      <div>
        <form method='post'  className='mx-auto'>
          <h4 className='text-center'> Sign In</h4>
          <div class="form-outline mb-4 mt-5">
            <input type="email" id="form2Example1" name='email' value={Login.email} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example1">User ID</label>
            {errors.email && <div style={{ color: "red" }} className="error">{errors.email}</div>}
          </div>


          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" name='password' value={Login.password} onChange={formValue} class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
            {errors.password && <div style={{ color: "red" }} className="error">{errors.password}</div>}
          </div>


          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
            </div>

            <div class="col">
              <p style={{color:"blue"}} onClick={sendOtp}><u>Forgot password?</u></p>
            </div>
          </div>


          <button type="button" class="btn btn-primary btn-block mb-4" onClick={checkUser}  >Sign in</button>


          <div class="text-center">
            <p>Not a member? <p type='button' style={{color:"blue"}} onClick={()=>history.push("/Register")}>Register</p></p>

          </div>
          <div class="text-center">
            <hr></hr>
            
          </div>
        </form>

      </div>
    </div>

  );
}
export default Login