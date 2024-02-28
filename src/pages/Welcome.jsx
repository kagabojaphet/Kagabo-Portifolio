import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Blogs from "../components/Blog";
import Contact from "../components/Contact";
import Portifolio from "../components/Portifolio";
const Welcome=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <About/>
        <Portifolio/>
        <Skills/>
        <Blogs/>
        <Contact/>
        </>
    )
}
export default Welcome