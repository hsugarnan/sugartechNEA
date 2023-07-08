import { useRef, useState, useEffect } from 'react';
import './nav.css'
import sugartech from './sugartech.jpeg'
import {BrowserRouter as Router,Routes, Route, Link,Outlet } from 'react-router-dom';
import Footer from './footer';


function  Nav( {user} ){
    return(
      <div>
        <div className = "navbar">
         <div className="logo">
            <Link to="https://www.sugartech.page/" target="_blank" rel="noopener noreferrer"><img src={ sugartech } alt="logo" /></Link>
        </div>
         <div className = "pfpWrapper">
         </div>
         
        </div>
        <Outlet/>

        {/* <Footer/> */}
      </div>



    )
    


    

}


export default Nav