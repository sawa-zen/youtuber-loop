import React from 'react';
import classNames from 'classnames';
import CSS from './Header.css';

// AIzaSyAPNBm8mcwmLIi-QRXufVw7cXMCzJf_JJc
// channel: UCn-hW0BVhJBuzpeD-A-Aj0g?view_as=subscriber
/**
https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCn-hW0BVhJBuzpeD-A-Aj0g&key=AIzaSyAPNBm8mcwmLIi-QRXufVw7cXMCzJf_JJc
 **/


const Header = ({ className }) => (
  <div className={classNames(CSS.Header, className)}>
    <h1>YouTuberLoop</h1>
  </div>
);
export default Header;
