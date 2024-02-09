import React from "react";

const Header=()=>{
    return (
        <>
        <header>
            <div className="logo">
                <h1>K.JAPHET</h1>
            </div>
            <ul className="nav-links">
                <li><a href="@" className="active">Home</a></li>
                <li><a href="@">About me</a></li>
                <li><a href="@">Portifolio</a></li>
                <li><a href="@">Skills</a></li>
                <li><a href="@">Blogs</a></li>
                <li><a href="@">Contact</a></li>
                <div className="user"><i class='bx bxs-user-circle'></i></div>
                <div className="menu"><i class='bx bx-menu'></i></div>
            </ul>
        </header>
        </>
    )
}
export default Header