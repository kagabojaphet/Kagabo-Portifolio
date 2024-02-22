import React,{useState} from "react";

const Header=()=>{

    const [navbar,setnavbar]=useState(true)
    const [menubar,setmenubar]=useState(true)

    function shownavbar(){
      setnavbar(false)
    }
    function closenavbar(){
    

    }
    return (
        <>
    <header>
            <div className="logo">
                <h1>K.JAPHET</h1>                                                                                            
            </div>
           ({navbar &&<ul className="nav-links">
                <li><a href="@" className="active">Home</a></li>
                <li><a href="@">About</a></li>
                <li><a href="@">Portifolio</a></li>
                <li><a href="@">Skills</a></li>
                <li><a href="@">Blogs</a></li>
                <li><a href="@">Contact</a></li>
                <div className="user"><i class='bx bxs-user-circle'></i></div>
                
            </ul>
            })
            <div className="menu" onClick={shownavbar}><i class='bx bx-menu'></i></div>
        </header>
        </>
    )
}
export default Header