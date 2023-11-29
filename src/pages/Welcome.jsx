import React from "react";
import "../sass/main.scss";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";

const Welcome=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <About/>
        </>
    )
}
export default Welcome