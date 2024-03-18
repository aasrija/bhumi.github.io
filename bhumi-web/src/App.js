import React from 'react';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';


function App() {
  return (
    <Home>
   <Routes>
    <Route exact path='/' component={Home}></Route>
   </Routes>
   </Home>
  );
}

export default App;
