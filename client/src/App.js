import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import User from './pages/User';
import Login from './pages/Login'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Admin from './pages/Admin';
import AdmLogin from './pages/AdmLogin';
import MarkEntry from './pages/MarkEntry'
import SearchPage from './pages/searchpage'
import Contact from './pages/contact'



function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
       <Route path="/login" element={<Login/>}/> 
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/admlogin" element={<AdmLogin/>}/>
       <Route path="/markentry" element={<MarkEntry/>}/>
       <Route path="/searchpage" element={<SearchPage/>}/>
       <Route path="/contact" element={<Contact/>}/>

      </Routes>
    
    </div>
  )
}

export default App