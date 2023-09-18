import './navbar_use.css'
import './Container.css'
import './Dashboard_Folder/dashboard.css'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
function CheckWarrenty(props) {
    debugger
    var history = useHistory();
    const [updateData, setUpdateData] = useState({ pserial_no: "", purchase_date: "" })

    var onTextChange = (args) => {
        var copyUpdateDate = { ...updateData };
        copyUpdateDate[args.target.name] = args.target.value;
        setUpdateData(copyUpdateDate);
    }
    var toProductWarrenty = () => {
        axios.post(`Update/Warrenty`,
            {
                pserial_no: updateData.pserial_no,
                purchase_date: updateData.purchase_date

            })
            .then((response) => {
                if (response.status == 200) {
                    if (response.data == 1) {
                        Swal.fire(
                            'OK',
                            'Your Product Under Warrenty Limit',
                            'success'
                        )
                            .then(() => {
                                history.push('/Home')
                            })
                    }
                    else {
                        Swal.fire(
                            'Sorry',
                            'Your Product is Not Under Warrenty Limit',
                            'question'
                        )
                            .then(() => {
                                history.push('/Home')
                            })
                    }

                }
            })
            .catch((error) => {
                if (error != null) {
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
                    <h4 className='text-center'> Check Warrenty</h4>

                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} name='pserial_no' value={updateData.pserial_no} type="text" id="form2Example3" class="form-control" />
                        <label class="form-label" for="form2Example3">Product Serial Number</label>
                    </div>


                    <div class="form-outline mb-4">
                        <input onChange={onTextChange} name='purchase_date' value={updateData.purchase_date} type="datetime-local" id="form2Example2" class="form-control" />
                        <label class="form-label" for="form2Example2">Puchase Date</label>
                    </div>


                    <button type="button" onClick={toProductWarrenty} class="btn btn-primary btn-block mb-4">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default CheckWarrenty;