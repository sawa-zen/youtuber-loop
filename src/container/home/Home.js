import React from 'react';
import CSS from './Home.css';
import Card from '../../components/common/card/Card';
import SubscribeChannelList from '../../container/subscribeChannelList/SubscribeChannelList';

const Home = (props) => (
  <Card className={CSS.Home}>
    <SubscribeChannelList className={CSS.HomeSubscribe} />
  </Card>
);
export default Home;
