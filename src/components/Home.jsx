import React from "react";
import kagabo from "../assests/IMG_20240229_165500.jpg";

const Home=()=>{
    return (
        <>
        <div className="home-container">
        <div className="image">
        <img src={kagabo} alt="" />
    </div>
    <div className="home-content">
        <h1>I'm K.JAPHET</h1>
        <h3>Fronted &<br/>Backend Developer</h3>
        <p>Hello My Dear, Welcome to My website and I am very excited to meet you.
            So you can send me anything that are want to tell me even support, 
            idea,feedback and problem. keep with me as long as you would like talk to me
            please follow me with social media below Enjoy.
        </p>
        <div className="home-icon">
                <a href="@"><i class='bx bxl-facebook'></i></a> 
                <a href="@"><i class='bx bxl-twitter' ></i></a>
                <a href="@"><i class='bx bxl-instagram' ></i></a>
                <a href="@"><i class='bx bxl-linkedin' ></i></a>
        </div>
        <div className="btn-container">
            <a href="@" className="btn" >Download CV</a>
        </div>

    </div>
</div>
</>
    )
}
export default Home