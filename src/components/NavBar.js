import React from 'react'
import { Routes, Route,Link } from 'react-router-dom';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import './navbar.css';

export default function NavBar() {
  return (
    <div>
        <ul className='navbar'>
            <li><Link to="/demo1">Demo 1</Link> </li>
            <li><Link to="/demo2">Demo 2</Link> </li>
        </ul>
        <Routes>
            <Route path="/" element={<Demo1/>}/>
            <Route path="/demo1" element={<Demo1/>}/>
            <Route path="/demo2" element={<Demo2/>}/>

            
        </Routes>
    </div>
  )
}
