import React from 'react';
import SubscribeChannelList from '../../container/subscribeChannelList/SubscribeChannelList';

const Home = (props) => (
  <div>
    <h1>Home</h1>
    <SubscribeChannelList />
    <div onClick={() => {console.info(props);}}>button</div>
  </div>
);
export default Home;
