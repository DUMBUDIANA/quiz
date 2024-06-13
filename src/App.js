
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.js';
// import quizData from './components/quizData.js';

import './App.css';
import QuizPage from './components/QuizPage.js';

function App() {
    return (
      
   
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/QuizPage" element={<QuizPage />} />
            </Routes>
        </Router>
    );
}

export default App;



