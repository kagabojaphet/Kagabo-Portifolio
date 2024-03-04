import React from "react";

const Signup=()=>{
    return(
        <>
        <div className="form-container">
            <form action="">
                <h4>Registration Form</h4>
                <div className="input-box">
                    <label htmlFor="">FirstName</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">LastName</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">PhoneNumber</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Email</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">Password</label>
                    <input type="text" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="">ConfirmPassword</label>
                    <input type="text" required/>
                </div>
                <p>Already have an account? <a href="/Login">Login</a></p>
                <div className="btn">
                    <button>Signup</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Signup           