const subscribeChannels = (state = [], action) => {
  switch(action.type) {
    case 'GET_SUBSCRIBE_CHANNELS':
      return action.channels;
    default:
      return state;
  }
};
export default subscribeChannels;
