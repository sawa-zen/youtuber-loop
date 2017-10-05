import React from 'react';
import { connect } from 'react-redux';
import { fetchSubscribeChannels } from '../../actions/index';
import ChannelList from '../../components/channelList/ChannelList';

class SubscribeChannelList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSubscribeChannels());
  }

  render() {
    const { channels, className } = this.props;
    return (
      <ChannelList
        className={className}
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
