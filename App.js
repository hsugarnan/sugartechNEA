
import React from 'react';
import './App.css';
import Login from './login.jsx'
import Nav from './navsugar.jsx'
import Footer from './footer';
import sugartech from './sugartech.jpeg'
import { createUserWithEmailAndPassword } from "./firebase/init.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "./firebase/init.js";
import ExcelIntegration from './xlsx.jsx'
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import AddSAFEReport from './AddSAFEReport.jsx'
import AddEODReport from './AddEODReport.jsx'

function App() {

  
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Nav/>}>
          <Route index element={<Login />} />
          <Route path="/xlsx" element={<ExcelIntegration />} />
          <Route path="/AddSAFEReport" element={<AddSAFEReport />} />
          <Route path="/AddEODReport" element={<AddEODReport />} />
         </Route>
      </Routes>
    </Router>
  );
}

export default App;
