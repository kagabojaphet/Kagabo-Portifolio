import React from "react";

const Login=()=>{
    return(
        <>
        <div className="form-container">
            <form action="">
                <h4>Login Form</h4>
                <div className="input-box">
                    <label htmlFor="">Email</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Password</label>
                    <input type="text" required/>
                </div>
                <p>if you don't have an account? <a href="">Login</a></p>
                <div className="btn">
                    <button>Login</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Login           