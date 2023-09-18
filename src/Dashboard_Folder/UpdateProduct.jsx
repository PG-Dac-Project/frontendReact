import '../navbar_use.css'
import '../Container.css'
import './dashboard.css'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function UpdateProduct(props){
  debugger
  var history=useHistory();
  const[updateData,setUpdateData]=useState({pmodel_name:"",purchase_date:"",pserial_no:""})
  useEffect(()=>{
    debugger
    axios.get(`Update/${props.location.state}`)
    .then((response)=>{
      debugger
      var data=response.data;
      setUpdateData(data);
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
        // swal("Sorry!","Something went Wrong")
      }
    })
  },[])
 
  var onTextChange=(args)=>{
    var copyUpdateDate={...updateData};
    copyUpdateDate[args.target.name]=args.target.value;
    setUpdateData(copyUpdateDate);
  }
  var toProductUpdate=()=>{
    axios.put(`Product/${props.location.state}`,
    {
      pmodel_name:updateData.pmodel_name,
      purchase_date:updateData.purchase_date,
      pserial_no:updateData.pserial_no
    })
    .then((response)=>{
      if(response.status==200)
      { 
          // swal("Congrates!","you successfully updated product details")
          Swal.fire(
            'Congrats',
            'you successfully updated product details',
            'success'
          )
          .then(()=>{
            history.push('/ProductDetails')
          })  
      }
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
  }
    return(
        <div className='cont-log'>
        <div>
            <form method='post' className='mx-auto'>
                <h4 className='text-center'> Update Product</h4>
                <div class="form-outline mb-4 mt-5">
                    <input onChange={onTextChange} name='pmodel_name' value={updateData.pmodel_name} type="text"  id="form2Example1" class="form-control"  />
                    <label class="form-label" for="form2Example1">Model Name</label>
                </div>


                <div class="form-outline mb-4">
                    <input onChange={onTextChange} name='purchase_date' value={updateData.purchase_date} type="text" id="form2Example2" class="form-control"  />
                    <label class="form-label" for="form2Example2">Puchase Date</label>
                </div>

                <div class="form-outline mb-4">
                    <input onChange={onTextChange} name='pserial_no' value={updateData.pserial_no} type="text" id="form2Example3" class="form-control" />
                    <label class="form-label" for="form2Example3">Product Serial Number</label>
                </div>

                {/* <div class="form-outline mb-4">
                    <textarea onChange={onTextChange} name='description' value={updateData.description} class="form-control md-4" placeholder="Leave description here" id="floatingTextarea2" style={{height: 100}}></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div> */}
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


                <button type="button" onClick={toProductUpdate} class="btn btn-primary btn-block mb-4">Submit</button>


                {/* <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div> */}
            </form>
        </div>
    </div>
    )
}
export default UpdateProduct;