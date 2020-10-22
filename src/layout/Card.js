import React from 'react';

export const Card = props => {
  return (
    <div className='card'>
      <div className='card-img'>
        <img id='img' src={props.img} alt='avatar' />
      </div>
      <div className='info-box'>
        <h2 id='title'>{props.title}</h2>
        <p id='text'>{props.text}</p>
        <p id='role'>- {props.role}</p>
      </div>
    </div>
  );
};

export const CardFlip = props => {
  return (
    <div className='card'>
      <div className='info-box'>
        <h2>{props.title}</h2>
        <p id='text'>{props.text}</p>
        <p id='role'>- {props.role}</p>
      </div>
      <div className='card-img'>
        <img id='img' src={props.img} alt='avatar' />
      </div>
    </div>
  );
};
export default Card;
