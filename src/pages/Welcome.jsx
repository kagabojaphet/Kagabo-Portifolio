import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Blogs from "../components/Blog";
const Welcome=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <About/>
        <Skills/>
        <Blogs/>

        </>
    )
}
export default Welcome