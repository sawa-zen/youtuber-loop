import { connect } from 'react-redux';
import ChannelList from '../../components/channelList/ChannelList';

const mapStateToProps = (state) => {
  return {
    channels: state.subscribeChannels
  };
};

const subscribeChannelList = connect(
  mapStateToProps
)(ChannelList);

export default subscribeChannelList;
