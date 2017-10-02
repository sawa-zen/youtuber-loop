import React from 'react';
import { connect } from 'react-redux';
import { getSubscribeChannels } from '../../actions/index';
import ChannelList from '../../components/channelList/ChannelList';

class SubscribeChannelList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getSubscribeChannels());
  }

  render() {
    const { channels } = this.props;
    return (
      <ChannelList
        channels={channels} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    channels: state.subscribeChannels
  };
};

export default connect(mapStateToProps)(SubscribeChannelList);
