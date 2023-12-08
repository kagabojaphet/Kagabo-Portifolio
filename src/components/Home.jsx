import React from "react";

const Home=()=>{
    return (
        <>
        <div className="home-container">
        <div className="image">
        <img src="" alt="" />
    </div>
    <div className="home-content">
        <h1>I'm K.JAPHET</h1>
        <h3>Fronted &<br/>Backend Developer</h3>
        <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Sequi in esse nisi
             necessitatibus alias fugit nihil 
             explicabo fugiat cupiditate quae
              non quasi rem sint blanditiis,
             voluptates nostrum sed neque iusto!
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