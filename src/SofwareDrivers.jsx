import { text } from '@fortawesome/fontawesome-svg-core';
import './Driver.css'
import image1 from './images/download.png'
import axios from 'axios';
import Swal from 'sweetalert2';
function Software() {
    debugger
    var forDownload=(args)=>{
        debugger
        axios.get(`FileDownloading/Download/${args}`,{
            responseType:'blob',
        })
        .then((response)=>{

            debugger
            if(response.status==200)
            {
                const url=URL.createObjectURL(response.data);
                const a=document.createElement('a');
                a.href=url;
                a.download=`${args}`+".exe";
                a.style.display='none';
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
                Swal.fire("Success!","Download Complete")
            }
        })
        .catch((error)=>{
            debugger
            if(error!=null)
            {
                Swal.fire("Sorry!","Something went Wrong!!")
            }
        })
    }
    return (
        <div className='cont-log' style={{paddingTop:'50px',display:'flex',flexWrap:'wrap',justifyContent:'center', }}>
            <div className='form'>
            
            
            
            {/*  */}
                <div className="list-group"style={{height:'auto',paddingTop:'10px'}}>
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        Leser Jet P1005 Printer Driver
                    </button>
                    <button type="text"  className="list-group-item list-group-item-action">Diagnostic Tool-Fixes Installation and Driver issues</button>
                    <button onClick={()=>{forDownload("LPDiagnostic")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        Leser Jet P1005 Printer Driver
                    </button>
                    <button type="text"  className="list-group-item list-group-item-action">Basic Driber-Product Installation</button>
                    <button onClick={()=>{forDownload("ljP1000_P1500-HB-pnp-win64-en")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
              
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        DeskJet GT5810 Printer Driver
                    </button>
                    <button type="Text"  className="list-group-item list-group-item-action">Diagnostic Tool-Fixes Installation and Driver issues</button>
                    <button onClick={()=>{forDownload("DJ5810_R1750B")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        DeskJet GT5810 Printer Driver
                    </button>
                    <button type="Text"  className="list-group-item list-group-item-action">Basic Driber-Product Installation</button>
                    <button onClick={()=>{forDownload("HPEasyStart_15_9_11")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
               
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        Leser Jet P1008 Printer Driver
                    </button>
                    <button type="Text"  className="list-group-item list-group-item-action">Diagnostic Tool-Fixes Installation and Driver issues</button>
                    <button onClick={()=>{forDownload("HPPSdr1")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
                    <button type="text" className="list-group-item list-group-item-action active" aria-current="true">
                        Leser Jet P1008 Printer Driver
                    </button>
                    <button type="Text"  className="list-group-item list-group-item-action">Basic Driber-Product Installation</button>
                    <button onClick={()=>{forDownload("HPPSdr")}} type="button" className="list-group-item list-group-item-action"><img src={image1} alt='Download' style={{width:'30px',height:'30px'}}/></button>
                  
                </div>
            
            </div>
        </div>
    )
}
export default Software;