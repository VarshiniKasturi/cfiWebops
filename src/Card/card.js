import React, { useState, useEffect } from 'react';
import sound from '../assets/sounds/sound.mp3'
import './card.css'
const Card = () => {
    const [clicked, setClicked] = useState(false);
    const [cardContent, setCardContent] = useState('');

    const urlFront = 'https://official-joke-api.appspot.com/random_joke';
    const urlBack = 'https://api.quotable.io/random';

    const fetchJoke = async () => {
        const response = await fetch(urlFront);
        const data1 = await response.json();
        return `${data1.setup} ${data1.punchline}`;
    };

    const fetchQuote = async () => {
        const response = await fetch(urlBack);
        const data2 = await response.json();
        return `${data2.content} `;
    };
    const style1 = {
      transform: "rotateY(180deg)",
  };

  const style2 = {
      transform: "rotateY(0deg)",
  };
  
    const cardClick = async () => {
        if (clicked) {
            const frontData = await fetchJoke();
            setCardContent(frontData);
        } else {
            const backData = await fetchQuote();
            setCardContent(backData);
        }
        setClicked(!clicked);

        const audio = new Audio(sound);
        audio.play();
    };

    

    useEffect(() => {
        fetchJoke().then((data1) => setCardContent(data1));
    }, []);

    return (
        <div
            className="card"
            onClick={cardClick}
            style={clicked ? style1 : style2}
        >
            <p>{cardContent}</p>
        </div>
    );
};

export default Card;
