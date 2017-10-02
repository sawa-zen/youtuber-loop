import { connect } from 'react-redux';
import { getSubscribeChannels, resetSubscribeChannels } from '../../actions/index';
import ChannelList from '../../components/channelList/ChannelList';

const mapStateToProps = (state) => {
  return {
    channels: state.subscribeChannels
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(getSubscribeChannels());
    },
    onResetClick: () => {
      dispatch(resetSubscribeChannels());
    }
  }
};

const subscribeChannelList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);

export default subscribeChannelList;
