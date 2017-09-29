import { connect } from 'react-redux';
import ChannelList from '../../components/channelList/ChannelList';

const mapStateToProps = (state) => ({
  channels: [{}, {}]
});

const SubscribeChannelList = connect(
  mapStateToProps
)(ChannelList);

export default SubscribeChannelList;
