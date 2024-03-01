import React from "react";
import {Progress,Space} from "antd";
import { Image } from 'antd';
import kagabo from "../assests/uu-r.png";

const Skills=()=>{
    return(
        <>
        <div className="skills-container">
            <div className="skills-left">
            <h1>SKILLS</h1>
            <div className="skills">
            <div className="skills-image">
                <Image src={kagabo} alt="" >
                    </Image>
                    
                </div>
            </div>
              
            </div>
            <div className="skills-right">
                <h2>MY SKILLS</h2>
                <p>I have skills in Software Development. firstly I studied in Highschool, in 
                    Highschool studied Html,Css,JS,Mysqli,Php,C and C++. Then I continued my journey at 
                    Nyabiheke Alight Coding School, in Nyabiheke Alight Coding School I studied 
                    Js,Html5,Css,Scss,React,Figma,Nodejs,PostmanApi, and MongoDB, 
                    so look my progress for each course below.
                    
                     </p>
                     <Space wrap className="progress">
                        <div className="progress-card">
                        <Progress type="circle" percent={95} className="circle"/>
                        <h3>HTML</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={80} className="circle"/>
                        <h3>CSS</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={75} className="circle"/>
                        <h3>JAVASCRIPT</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={65} className="circle"/>
                        <h3>PHP</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={65} className="circle"/>
                        <h3>MYSQL</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={70} className="circle"/>
                        <h3>MONGO DB</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={60} className="circle"/>
                        <h3>REACT</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={80} className="circle"/>
                        <h3>FIGMA</h3>
                        </div>
                     </Space>
            </div>
        </div>
        </>
    )
}
export default Skills