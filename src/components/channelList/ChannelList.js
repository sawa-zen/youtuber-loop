import React from 'react';
import List from '../common/list/List';
import ChannelListItem from '../channelListItem/ChannelListItem';
import CSS from './ChannelList.css';

const ChannelList = ({ channels = [] }) => (
  <List className={CSS.ChannelList}>
    {channels.map((channel, index) => (
      <ChannelListItem
        key={index}
        name='hoge' />
    ))}
  </List>
);
export default ChannelList;
