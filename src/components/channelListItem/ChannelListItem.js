import React from 'react';
import CSS from './ChannelListItem.css';
import ChannelIcon from '../channelIcon/ChannelIcon';

const ChannelListItem = ({icon, name}) => (
  <div className={CSS.wrapper}>
    <ChannelIcon className={CSS.icon}/>
    <div className={CSS.name}>{name}</div>
  </div>
);
export default ChannelListItem;
