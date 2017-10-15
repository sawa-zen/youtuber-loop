import React from 'react';
import CSS from './Home.css';
import SubscribeChannelList from '../../container/subscribeChannelList/SubscribeChannelList';

const Home = (props) => (
  <div className={CSS.wrapper}>
    <SubscribeChannelList className={CSS.subscribe} />
  </div>
);
export default Home;
