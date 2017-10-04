import React from 'react';
import CSS from './ChannelListItem.css';
import ChannelIcon from '../channelIcon/ChannelIcon';

const ChannelListItem = ({icon, name}) => (
  <div className={CSS.ChannelListItem}>
    <ChannelIcon />
    <div>{name}</div>
  </div>
);
export default ChannelListItem;
