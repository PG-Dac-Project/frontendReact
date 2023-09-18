import img3 from './images/printer-services-low-resolution-logo-white-on-transparent-background.png'
import { useState } from 'react';
import { useEffect } from 'react';
function Header()
{
    const [isLogin, setLogin] = useState(false);
    const [curUser, setcurUser] = useState(null);
    
    useEffect(() => {
        debugger

            setLogin(window.localStorage.getItem("isLogin"));
            setcurUser(window.localStorage.getItem("token"));

    },[]);

    return(
        <div className="container-fluid header-container ">
                <div className='header-content'>
                      <div style={{padding:"90px"}}>
                      {
                                        isLogin && (
                                            <>
                                                <div style={{color:"white",fontFamily:"serif"}}>
                                                 
                                                        <h2>Welcome,&nbsp;{curUser}</h2>
                                                
                                                </div>
                                            </>
                                        )
                       }
                                             {
                                        !isLogin && (
                                            <>
                                                <div style={{color:"white",fontFamily:"fantasy"}}>
                                                 
                                                        
                                                
                                                </div>
                                            </>
                                        )
                       }
                      </div>
               </div>
        </div> 
    )
}
export default Header;