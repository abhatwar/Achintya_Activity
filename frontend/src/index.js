import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './pages/User';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/Home';
import Lifeatachintiya from './pages/lifeatachintiya';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

<Header />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lifeatachintiya" element={<Lifeatachintiya />} />
      </Routes>
    <Footer />
    </Router>
    
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
