import React from "react";

const Contact=()=>{
    return(
        <>
        <div className="contact-container">
            <div className="contact-left">
            <h1>CONTACT</h1>
                <div className="contact-media">
                    <h4>Contact us</h4>
                    <div className="media-container">
                        <div className="media">
                        <i class='bx bxs-location-plus'></i>
                        <p>Gatsibo,Gatsibo,Gatsibo</p>
                        </div>
                        <div className="media">
                        <i class='bx bxs-phone-call' ></i>
                        <p>+250789757544</p>
                        </div>
                        <div className="media">
                        <i class='bx bxl-whatsapp'></i>
                        <p>+250785635633</p>
                        </div>
                        <div className="media">
                        <i class='bx bx-envelope' ></i>
                        <p>IradukundaJaphet@gmail.com</p>
                        </div>
                    </div>
                    <h4>Thanks !!!</h4>
                </div>
                
            </div>
            <div className="contact-right">
                <h2>MY CONTACT</h2>
                <div className="contact-form">
                    <p>Send us a message!</p>
                    <form action="">
                      <div className="input-box">
                      </div>
                    </form>
                    <form action="">

                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact