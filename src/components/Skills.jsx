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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit hic quod  
                    quisquam aliquam tempore similique nemo tenetur necessitatibus. 
                    Quasi dolore quaerat error incidunt temporibus fugiat
                     maxime perferendis itaque qui!</p>
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