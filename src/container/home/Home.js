import React from 'react';
import CSS from './Home.css';
import SubscribeChannelList from '../../container/subscribeChannelList/SubscribeChannelList';

const Home = (props) => (
  <div className={CSS.Home}>
    <SubscribeChannelList className={CSS.HomeSubscribe} />
  </div>
);
export default Home;
