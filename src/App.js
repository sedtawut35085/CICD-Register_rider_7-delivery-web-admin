import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoginScreen from './screen/LoginScreen/index'
import HomeScreen from './screen/HomeScreen';
import './App.css'

function App() {
  return (
        <Router>
          <Routes>
              <Route path='/' element={<LoginScreen />} />
              <Route path='/home' element={<HomeScreen />} />

          </Routes>
        </Router>
  );
}

export default App;
