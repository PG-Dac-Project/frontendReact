
import axios from 'axios';
import './login.css'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

function EditProfile() {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    city: '',
    area: '',
    pincode: '',
    passwd: '',
  });

  let history = useHistory();
  //for error state
  const [errors, setErrors] = useState({});

  // useEffect
  useEffect(() => {
    debugger
      var check = window.localStorage.getItem("isLogin");
   if(check==null){
    history.push("/Login");
   }
   else{
    var sendid = parseInt(window.localStorage.getItem("uid"));
    const url = `Users/?uid=${sendid}`
      axios.get(url)
      .then((response)=>{
        debugger
          if(response.status === 200){
            var sdata = response.data;
            setUser(sdata);
          }
              
      })
      .catch((error)=>{
        debugger
      })

   }
},[]);

  var handleChange = (args) => {
    var copyOfuser = { ...user };
    copyOfuser[args.target.name] = args.target.value;
    setUser(copyOfuser);

  }

  function validateForm() {
    let valid = true;
    const newErrors = {};

    if (user.fname.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (user.lname.trim() === '') {
      newErrors.fname = 'last name is required';
      valid = false;
    }
    if (user.city.trim() === '') {
      newErrors.city = 'city is required';
      valid = false;
    }
    if (user.area.trim() === '') {
      newErrors.area = 'area is required';
      valid = false;
    }


    if (!user.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }
      // Add password validation (e.g., minimum length of 8 characters)
    if (user.passwd.length < 8) {
       newErrors.passwd = 'Password must be at least 8 characters long';
       valid = false;
    }


    // add validation of  10 digit 
    if (!user.mobile.match(/^\d{10}$/)) {
      newErrors.mobile = 'Mobile number must be 10 digits';
      valid = false;
    }

    // Add validation for pincode (6 digits)
    if (!user.pincode.match(/^\d{6}$/)) {
      newErrors.pincode = 'Pincode must be 6 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  var handleRegister = () => {
    debugger
    if (validateForm()) {
      const url = 'http://localhost:56304/api/UpdateProfile';
      var id = parseInt(window.localStorage.getItem("uid"));
      axios.post(url,
        {
          uid:id,
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          mobile: user.mobile,
          passwd: user.passwd,
          city: user.city,
          area: user.area,
          pincode: user.pincode,
          role: user.role
        })
        .then((response) => {
          debugger
          console.log(response.data)
          setUser({
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            city: '',
            area: '',
            pincode: '',
            password: '',
            cpassword: '',
            role: ''
          });
          if (response.status === 200) {
            // Swal.fire(
            //   
            //   '',
            //   'success'
            // )

            Swal.fire(
              'Great!',
              'Your Profile Updated  successfully!',
              'success'
            )
            .then(()=>{
              history.push('/Profile')
          })
          }
          else {

          }

        })
        .catch((error) => {
          debugger
          Swal.fire(
            'Sorry!',
            'Something went wrong',
            'question'
          )
        })
    }

  }

  return (
    <div className='cont-log'>
      <div>
        <form method='post' className='mx-auto' >

          <div class="form-outline  mb-4 mt-5 ">
            <input type="text" id="form2Example1" name='fname' value={user.fname} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example1"><strong>First Name</strong></label>
            {errors.name && <div style={{ color: "red" }} className="error">{errors.name}</div>}
          </div>

          <div class="form-outline   mb-4">
            <input type="text" id="form2Example2" name='lname' value={user.lname} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Last Name</strong></label>
            {errors.fname && <div style={{ color: "red" }} className="error">{errors.fname}</div>}
          </div>


          <div class="form-outline  mb-4">
            <input type="email" name='email' value={user.email} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Email</strong></label>
            {errors.email && <div style={{ color: "red" }} className="error">{errors.email}</div>}
          </div>

          <div class="form-outline mb-4">
            <input type="number" name='mobile' value={user.mobile} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Mobile No</strong></label>
            {errors.mobile && <div style={{ color: "red" }} className="error">{errors.mobile}</div>}
          </div>

          <div class="form-outline mb-4">
            <input type="text" name='city' value={user.city} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>City</strong></label>
            {errors.city && <div style={{ color: "red" }} className="error">{errors.city}</div>}
          </div>

          <div class="form-outline mb-4">
            <input type="text" name='area' value={user.area} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Area</strong></label>
            {errors.area && <div style={{ color: "red" }} className="error">{errors.area}</div>}
          </div>

          <div class="form-outline mb-4">
            <input type="number" name='pincode' value={user.pincode} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Pincode</strong></label>
            {errors.pincode && <div style={{ color: "red" }} className="error">{errors.pincode}</div>}

          </div>

          <div class="form-outline mb-4">
            <input type="password" name='password' value={user.passwd} onChange={handleChange} class="form-control" />
            <label class="form-label" for="form2Example2"><strong>Password</strong></label>
            {errors.passwd && <div style={{ color: "red" }} className="error">{errors.passwd}</div>}
          </div>

          <button type="button" onClick={handleRegister} class="btn btn-primary btn-block mb-4">Update Profile</button>

        </form>


      </div>
    </div>
  )
}

export default EditProfile;