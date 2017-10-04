import React from 'react';
import List from '../common/list/List';
import ChannelListItem from '../channelListItem/ChannelListItem';

const ChannelList = ({ channels = [] }) => (
  <List>
    {channels.map((channel, index) => (
      <ChannelListItem
        key={index}
        name='hoge' />
    ))}
  </List>
);
export default ChannelList;
