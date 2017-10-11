import React from 'react';
import CSS from './Card.css';

const Card = ({ children, className }) => (
  <div className={`${CSS.wrapper} ${className}`}>
    {children}
  </div>
);
export default Card;
