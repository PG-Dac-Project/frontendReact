import axios from 'axios';
import './login.css'
import './profile.css'

import { useState } from 'react';

import image from './images/user.png'

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
function Profile(){
    const[user,setUser] = useState({
        fname:'',
        lname:'',
        email:'',
        mobile:'',
        city:'',
        area:'',
        pincode:'',
        role:''
      });
      let history=useHistory();

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

      var EditProfile = () =>{
             debugger
             history.push("/EditProfile")
      }
    return(
        <div>
            <center>
        <div className='cont-log'>
        <div className='profile-layout'>

                <div >
                <img style={{height:"120px",width:"120px"}} src={image} class="card-img-top" alt="create_inqury"></img>
                </div>
                <h4 className='text-center'> Update Profile </h4>    
            <div className='profile-flex'>
            <div className='profile-div'>
              <label class="form-label" for="form2Example1"><strong>First Name:&nbsp;</strong> </label>
              <label class="form-label" for="form2Example1">{user.fname}   </label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Last Name:&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.lname}  </label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Email ID:&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.email}  </label>
            </div>
  
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Mobile No:&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.mobile} </label>
            </div>

            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>City:&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.city}  </label>

            </div>
            
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"><strong>Area:&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.area} </label>

            </div>
           
            <div className='profile-div'>
              <label class="form-label" for="form2Example2"> <strong>Pincode :&nbsp;</strong></label>
              <label class="form-label" for="form2Example1">{user.pincode} </label>

            </div>
  
            <button type="button" class="btn btn-primary btn-block mb-4" onClick={EditProfile}>Edit Profile</button>
            </div>
        
  
        </div>
      </div>
      </center>
      </div>
    )
}

export default  Profile;