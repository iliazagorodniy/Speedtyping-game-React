// RECREATE THE WHOLE SPEED TYPING GAME FROM SCRATCH

import React, {useState, useEffect, useRef} from "react";

const App = () => {
    const GAME_DURATION = 10; // in seconds
    
    const [textareaValue, setTextareaValue] = useState("");
    const [remainingTime, setRemainingTime] = useState(GAME_DURATION);
    const [isTimeRunning, setIsTimeRunning] = useState(false);
    const [numberOfWords, setNumberOfWords] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(0);
    
    const textareaRef = useRef(null)
    
    function handleChange(event) {
        let {value} = event.target;
        setTextareaValue(value);
    }
    
    function startGame() {
        textareaRef.current.disabled = false;
        textareaRef.current.focus();
        setTextareaValue("");
        setRemainingTime(GAME_DURATION);
        setNumberOfWords(0);
        setIsTimeRunning(true);
    }
    
    function endGame() {
        setIsTimeRunning(false);
        setNumberOfWords(countNumberOfWords(textareaValue));
        setTypingSpeed(calculateTypingSpeed(textareaValue, GAME_DURATION));
    }
    
    function countNumberOfWords(text) {
        const wordsArr = text.trim().split(" ");
        return wordsArr.filter((item) => {
            return item !== ""
        }).length
    }
    
    function calculateTypingSpeed(text, time) {
        const string = text.trim();
        const symbols = string.length;
        const speed = symbols / time * 60; // symbols per minute
        return speed;
    }
    
    useEffect(() => {
        if (remainingTime > 0 && isTimeRunning) {
            setTimeout(() => setRemainingTime(time => time - 1), 1000)    
        } else if(remainingTime === 0) {
            endGame();
        }
    }, [remainingTime, isTimeRunning])

    return (
        <div>
        
            <div className="ui red inverted menu">
                <a className="active item">
                    <h3 className="ui center aligned inverted header">
                        Speed typing game
                    </h3>
                </a>
            </div>
            
            <div className="ui container">
                
                <div className="ui form">
                    <div className="field">
                        <label>Enter the words here:</label>
                        <textarea
                            ref={textareaRef}
                            disabled={!isTimeRunning}
                            value={textareaValue}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                </div>
                
                <button
                    className="ui inverted red button" 
                    style={{marginTop: "20px"}}
                    disabled={isTimeRunning}
                    onClick={startGame}
                >
                    <i className="play icon"></i>
                    Play game
                </button>
                
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            <i className="clock red icon"></i>
                            Time remaining: {remainingTime} sec
                        </div>
                        <div className="meta">Gameplay card. Watch your results below</div>
                        <div className="description">
                            <p>Watch how many words have you typed and your typing speed here.</p>
                        </div>
                    </div>
                    <div className="content">
                        <i className="keyboard icon"></i>
                        Number of words: <b>{numberOfWords}</b>
                    </div>
                    <div className="content">
                        <i className="shipping fast icon"></i>
                        Typing speed: <b>{typingSpeed} symbols/min</b>
                    </div>
                </div>
                
            </div> 
                       
        </div>
    )
}

export default App;
