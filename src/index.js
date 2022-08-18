import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChoreForm from './components/ChoreForm';
import App from './App';
import ChoreChart from './components/ChoreChart';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/chores' element={<ChoreForm/>}/>
        <Route path='/chorechart' element={<ChoreChart/>}/>

      </Routes>
    </BrowserRouter>
);

// 
