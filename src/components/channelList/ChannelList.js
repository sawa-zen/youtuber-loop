import React from 'react';
import classNames from 'classnames';
import List from '../common/list/List';
import ChannelListItem from '../channelListItem/ChannelListItem';
import CSS from './ChannelList.css';

const ChannelList = ({ channels = [], className }) => (
  <List className={classNames(CSS.ChannelList, className)}>
    {channels.map((channel, index) => (
      <ChannelListItem
        key={index}
        name='hoge' />
    ))}
  </List>
);
export default ChannelList;
