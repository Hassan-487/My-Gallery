import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Photo from './Components/Photo';
import Vide from './Components/Vide';
import Back from './Components/Back';
import { Routes,Route } from 'react-router-dom';
import LoginForm from './LoginForm';

function App() {
  const [query,setQuery]=useState('Nature');
 
 return(
  <>
 
   <Navbar query={query} setQuery={setQuery}/ > 
  <Routes>
    <Route path='/back' element={<Back/>}/>
    <Route path='/loginn' element={<LoginForm/>}/>
    <Route path='/photo' element={<Photo query={query}/>}/>
    <Route path='/video' element={<Vide query={query}/>}/>
  </Routes>
  </>
 );
}

export default App;
