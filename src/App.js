import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/account/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;