// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imagetop from './images/top.png';
import imagebottom from './images/bottom.png';

function HomePage() {
    const navigate = useNavigate();

    const startQuiz = () => {
        navigate('/QuizPage');
    };

    return (
        <div className="home-page">
              <img src={imagetop } alt='' className='top'/>
            <h1>Quizzical</h1>
            <h3 className='banner-text'>Some description if needed</h3>
            <button className='btn' onClick={startQuiz}>Start quiz</button>
            <img src={imagebottom } alt='' className='bottom'/>
        </div>
    );
}

export default HomePage;
