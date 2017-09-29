import React from 'react';

const List = ({ items }) => (
  <div>
    {items.map((item, index) => (
      <div key={index}>item</div>
    ))}
  </div>
);
export default List;
