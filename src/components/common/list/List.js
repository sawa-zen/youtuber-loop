import React from 'react';
import classNames from 'classnames';

const List = ({ className, children }) => (
  <div className={classNames('List', className)}>
    { children }
  </div>
);
export default List;
