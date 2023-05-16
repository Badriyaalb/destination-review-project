import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Placedescription from './Places/Placedescription.js';
import {Routes, Route, BrowserRouter} from 'react-router-dom' 
import SubmitReview from './Places/SubmitReview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>   
      <Route path='/Placedescription' element={<Placedescription/>}/>  
      <Route path='/SubmitReview' element={<SubmitReview/>}/>  

      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

