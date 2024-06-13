
import React, { useState } from 'react';
import quizData from './quizData';
import imagetop from './images/top.png';
import imagebottom from './images/bottom.png';

function QuizPage() {
    const [selectedOptions, setSelectedOptions] = useState({});
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionClick = (questionIndex, option) => {
        setSelectedOptions({ ...selectedOptions, [questionIndex]: option });
    };

    const handleSubmit = () => {
        let newScore = 0;
        quizData.forEach((question, index) => {
            if (question.answer === selectedOptions[index]) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setShowScore(true);
    };

    const handlePlayAgain = () => {
        setSelectedOptions({});
        setShowScore(false);
        setScore(0);
    };

    return (
        <div className="all">
            <img src={imagetop} alt='' className='top'/>
            <div className='quiz-page container'>  
            {showScore ? (
                <div className="score-section">
                    <div className="review-section">
                        {quizData.map((question, index) => (
                            <div key={index} className="question-block">
                                <h2 className='qns'>{question.question}</h2>
                            <div className="options">
                                    {question.options.map((option, optionIndex) => (
                                    <div
                                            key={optionIndex}
                                            className={`option ${option === question.answer ? 'correct' : selectedOptions[index] === option ? 'selected' : ''}`}
                                     >
                                            {option}
                                            {option === question.answer && ' '}
                                            {selectedOptions[index] === option && option !== question.answer && ''}
                                     </div>
                                    ))}
                                </div>
                                <div className='emty'></div>
                            </div>
                            
                        ))}
                        
                    </div>
                    <p className='bottom-elements'>
                    <p className='bottomelement-one'>You have scored {score} out of {quizData.length}</p>
                    <button onClick={handlePlayAgain}>Play Again</button>
                    </p>
                   
                </div>
            ) : (
                <div className="question-section">
                    {quizData.map((question, index) => (
                        <div key={index} className="question-block">
                            <h2 className='qns'>{question.question}</h2>
                            <div className="option-text">
                                {question.options.map((option, optionIndex) => (
                                <button
                                        key={optionIndex}
                                        onClick={() => handleOptionClick(index, option)}
                                        id="btn"
                                        className={`option ${selectedOptions[index] === option ? 'selected' : ''}`}
                                 >
                                        {option}
                                    </button>
                                ))}
                            </div>
                       <div className='emty'></div>

                            
                        </div>
                        
                        
                    ))}
                    
                    <button onClick={handleSubmit} className='check'>Check answers</button>
                </div>
            )}
        </div>
        <img src={imagebottom } alt='' className='bottom'/>
        </div>
    );
}

export default QuizPage;
