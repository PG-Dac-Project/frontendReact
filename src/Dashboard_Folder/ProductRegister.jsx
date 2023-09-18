import '../navbar_use.css'
import '../Container.css'
import './dashboard.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
function ProductRegister() {
  const[productData,setProductData]=useState({modalName:"",purchaseDate:"",productSerialNumber:""});
  let history=useHistory();
  var pushCreateEnquiry=()=>{
    history.push('/CreateEnquiry')
  }
  var onTextChange=(args)=>{
    var copyProductData={...productData}
    copyProductData[args.target.name]=args.target.value;
    setProductData(copyProductData);
  }
  //const url="http://localhost:56304/api/Product"
  var submitProductDetails=()=>{
    debugger
    const url="Product"
    axios.post(url,{
      pmodel_name:productData.modalName,
      purchase_date:productData.purchaseDate,
      pserial_no:productData.productSerialNumber
    })
    .then((response)=>{
      debugger
        if(response.data!=null)
        { 
          if(response.data==0)
          {
            Swal.fire(
              'Product is already register',
              'Sorry'
            )
            // swal("Product is already register")
          }
          else if(response.data==1){
            Swal.fire(
              'Congrats',
              'your product is register successfully',
              'success'
            )
            .then(()=>{
              history.push('/CreateEnquiry')
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
                <form method='post' className='mx-auto'>
                    <h4 className='text-center'> Product Registration</h4>
                    <div className="form-outline mb-4 mt-5">
                        <input onChange={onTextChange} type="text" id="form2Example1" name='modalName' value={productData.modalName} className="form-control" />
                        <label className="form-label" for="form2Example1">Model Name</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} type="date" id="form2Example2" name='purchaseDate' value={productData.purchaseDate} className="form-control" />
                        <label className="form-label" for="form2Example2">Puchase Date</label>
                    </div>

                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} type="text" id="form2Example3" name='productSerialNumber' value={productData.productSerialNumber} className="form-control" />
                        <label className="form-label" for="form2Example3">Product Serial Number</label>
                    </div>

                    {/* <div class="form-outline mb-4">
                        <textarea class="form-control md-4" placeholder="Leave description here" id="floatingTextarea2" style={{height: 100}}></textarea>
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


                    <button type="button" class="btn btn-primary btn-block mb-4" onClick={submitProductDetails}>Submit</button>
                    {/* <button  class="btn btn-primary btn-block mb-4" onClick={pushProductRegister}>Product Register</button> */}


                    {/* <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div> */}
                </form>
            </div>
        </div>

    )
}
export default ProductRegister;