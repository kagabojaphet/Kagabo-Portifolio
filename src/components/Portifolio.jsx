import React from "react";
import { Image } from 'antd';
import jeff from "../assests/kj.jpg"
import git from "../assests/git.png";


const Portifolio =()=>{
    return(
        <>
        <div className="portifolio-container">
            <div className="port-left">
            <h1>PORTIFOLIO</h1>
            <div className="port-image">
            <div className="port-left-img">
            <Image className="image" src={jeff}alt="" >
            </Image>
                </div>
            
            </div>
            </div>
            <div className="port-right">
                <h2>PORTIFOLIO</h2>
                <div className="port-right-cards">
                    <div className="card">
                        <img src={git} alt="" />
                        <div className="card-hover">
                            <p>My GitHub</p>
                            <a href="@">Open</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={git} alt="" />
                        <div className="card-hover">
                            <p>My GitHub</p>
                            <a href="@">Open</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={git} alt="" />
                        <div className="card-hover">
                            <p>My GitHub</p>
                            <a href="@">Open</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={git} alt="" />
                        <div className="card-hover">
                            <p>My GitHub</p>
                            <a href="@">Open</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Portifolio