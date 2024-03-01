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
                <p>
                    My name is Iradukunda Japhet but you can call me Kagabo Japhet(K.Japhet),
                    I have 22 years old and I am Backend & Fronted Developer.
                    I was born in Rwanda form Gatsibo Ditrict, I have Advanced 
                    Diploma in Software Development(SOD) Where I got in Highschool 
                    but I continued study at Nyabiheke Alight Coding School(Coding Training).
                    I have dreams to be a Senior Developer and I have short term goal & long term goal.
                    My Short term goal is to get a job reputed company and, My long term goal is to achieve
                    a good position where can build my career and help organisation. My strength is hardworking,
                    time managment, and solving problem. My weakness is I don't believe people easly. 
                    My hobby is reading books,
                    researching,listerning musics and football.  

                </p>
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