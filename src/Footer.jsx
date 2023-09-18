import './Container.css'
import imgLinkdin from './images/linkdin.png'
import imginsta from './images/insta.png'
import imgface from './images/facebook.png'
import imgyoutube from './images/you tube.png'

function Footer() {
    return (
        <div className="container-fluid footer-container ">
            <h6>Country/Region:      India</h6>
            <hr></hr>
            <div className="container footer-content">
                <div className="footer-content-div">
                    <h6>About Us</h6>
                    <h6>Contact Us</h6>
                    <h6>Call an Customer agent</h6>
                    <h6>Product Promotions</h6>
                </div>
                <div className="footer-content-div">
                    <h6>Support</h6>
                    <h6>Download drivers</h6>
                    <h6>Register your product </h6>
                    <h6>Check repair status</h6>
                </div>
                <div className="footer-content-div">
                    <h6> Stay connected</h6>
                    <h6> </h6>
                    <h6> </h6>
                    <img src={imgLinkdin} alt='' style={{ height: "33px", width: "31px" }} />
                    <img src={imginsta} alt='' style={{ height: "33px", width: "31px" }} />
                    <img src={imgface} alt='' style={{ height: "33px", width: "31px" }} />
                    <img src={imgyoutube} alt='' style={{ height: "33px", width: "31px" }} />

                </div>
            </div>
        </div>
    )
}
export default Footer;

// About Us                                                                    Support                                                                                                                                                                                                                                  

// Contact Us                                                                  Download drivers                                                              Stay connected

// Call an Customer agent                                             Register your product                                                                                                                

// Product Promotions                                                   Check repair status