import React from "react";
import { Image } from 'antd';
import kag from "../assests/kagabo.png";
const About=()=>{
 return(
    <>
    <div className="about-container">
        <div className="about-left">
        <h1>ABOUT</h1>
            <div className="about-image">
            <Image className="image" src={kag}alt="" >
                    </Image>
            </div>
        </div>
        <div className="about-right">
            <h2>ABOUT ME</h2>
            <div className="about">            
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Molestiae odit nobis commodi quaerat ut iure 
                tempore nemo accusantium, dolorem ad id eius placeat optio 
                eligendi quibusdam, numquam fugit totam eos
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Molestiae odit nobis commodi quaerat ut iure 
                tempore nemo accusantium, dolorem ad id eius placeat optio 
                eligendi quibusdam, numquam fugit?</p>
                <div className="home-icon">
                    <a href="@"><i className='bx bxl-facebook'></i></a>
                    <a href="@"><i className='bx bxl-twitter' ></i></a>
                    <a href="@"><i className='bx bxl-instagram' ></i></a>
                    <a href="@"><i className='bx bxl-linkedin' ></i></a>
                </div>
                <div className="btn-container">
                    <a href="@" className="btn">Read more</a>
                </div></div>
        </div>
    </div>
    </>
 )
}
export default About