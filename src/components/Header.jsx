import React,{useState,} from "react";

const Header=()=>{
    // const [toggleMenu, setToggleMenu]= useState(false)
    // const [screenWidth, setScreenWidth]=useState(window.innerWidth)
    // const toggleNav=()=>{
    //     setToggleMenu(!toggleMenu)
    // }

    const [clicked, setClicked]= useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }
    return (
        <>
    <header>
            <div className="logo">
                <h1>K.JAPHET</h1>                                                                                            
            </div>
            <ul className={clicked ? "nav-links-cliked" :"nav-links"}>
                <li><a href="/Welcome" className="active">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Portifolio">Portifolio</a></li>
                <li><a href="/Skills">Skills</a></li>
                <li><a href="/Blogs">Blogs</a></li>
                <li><a href="/Contact">Contact</a></li>
                <div className="user"><a href="/Login"><i class='bx bxs-user-circle'></i></a></div>
                
            </ul>

            <div onClick={handleClick} className="menu">
                <i class={clicked ? 'bx bx-x' :'bx bx-menu'}></i>
                </div>
        </header>
        </>
    )
}
export default Header