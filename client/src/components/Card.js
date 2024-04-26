import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  // const [count, setCount] = useState(0);
  // const updateCount = () => {
  //   setCount((count) => count + 1);
  // }

  // const [count2, setCount2] = useState(0);
  // const updateCount2 = () => {
  //   setCount2((count2) => count2 + 1);
  // }

  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount((count) => count + 1);
  };

  const [count2, setCount2] = useState(0);
  const [clicked, setClicked] = useState(false); // Add state to track if button is clicked

  const updateCount2 = () => {
    if (!clicked) {
      setCount2((count2) => count2 + 1);
      setClicked(true); // Set clicked to true after the first click
    }
  };

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"by " + props.author}</h3>
          <p className="description">{props.description}</p>
          <button className="betButton" onClick={updateCount} >Upvote ⬆ {count}</button>
          <button className="betButton" onClick={updateCount2} >Downvote ⬇ {count2}</button>
      </div>
  );
};

export default Card;