import React from 'react';
import classNames from 'classnames';
import CSS from './ChannelIcon.css';

const ChannelIcon = ({ className }) => (
  <div className={classNames(CSS.ChannelIcon, className)}>
    <img src="https://avatars1.githubusercontent.com/u/3971271?v=4&s=460" alt="" />
  </div>
);
export default ChannelIcon;
