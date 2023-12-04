import React from "react";
import {Progress,Space} from "antd";

const Skills=()=>{
    return(
        <>
        <div className="skills-container">
            <div className="skills-left">
            <h1>SKILLS</h1>
                <div className="skills-image">
                    <img src="" alt="" />
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
                        <Progress type="circle" percent={95} />
                        <h3>HTML</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>CSS</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>JAVASCRIPT</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>PHP</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>MYSQL</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>MONGO DB</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>REACT</h3>
                        </div>
                        <div className="progress-card">
                        <Progress type="circle" percent={95} />
                        <h3>FIGMA</h3>
                        </div>
                     </Space>
            </div>
        </div>
        </>
    )
}
export default Skills