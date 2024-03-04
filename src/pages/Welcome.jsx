import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Blogs from "../components/Blog";
import Contact from "../components/Contact";
import Portifolio from "../components/Portifolio";
import Signup from "../components/Sign-up";
import Login from "../components/Login";
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
        <Signup/>
        <Login/>
        </>
    )
}
export default Welcome