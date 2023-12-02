import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
const Welcome=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <About/>
        <Skills/>

        </>
    )
}
export default Welcome