import React,{useState} from "react";

const Header=()=>{
    const [toggleMenu, setToggleMenu]= useState(true)
    const toggleNav=()=>{
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
    <header>
            <div className="logo">
                <h1>K.JAPHET</h1>                                                                                            
            </div>
            {toggleMenu &&(<ul className="nav-links">
                <li><a href="@" className="active">Home</a></li>
                <li><a href="@">About</a></li>
                <li><a href="@">Portifolio</a></li>
                <li><a href="@">Skills</a></li>
                <li><a href="@">Blogs</a></li>
                <li><a href="@">Contact</a></li>
                <div className="user"><i class='bx bxs-user-circle'></i></div>
                
            </ul>)}

            <div onClick={toggleNav} className="menu"><i class='bx bx-menu'></i></div>
        </header>
        </>
    )
}
export default Header