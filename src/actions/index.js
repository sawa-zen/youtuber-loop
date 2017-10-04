export const fetchSubscribeChannels = () => {
  return {
    type: 'GET_SUBSCRIBE_CHANNELS',
    channels: [{}, {}, {}]
  };
};

export const resetSubscribeChannels = () => {
  return {
    type: 'RESET_SUBSCRIBE_CHANNELS'
  };
};
