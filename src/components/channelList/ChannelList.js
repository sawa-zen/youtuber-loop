import React from 'react';
import List from '../common/list/List';

const ChannelList = ({ channels = [] }) => (
  <List>
    {channels.map((channel, index) => (
      <div key={index}>Item</div>
    ))}
  </List>
);
export default ChannelList;
