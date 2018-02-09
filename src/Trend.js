import React from 'react';
import PropTypes from 'prop-types';

import logo from './media/logo.svg';

function Trend(props) {
  const myStyle = {
    width: '80px',
    visibility: props.isTrending ? 'show' : 'hidden',
  };
  return (
    <div>
      <span> #{props.title} </span>
      <img src={logo} alt="logo" style={myStyle} />
    </div>
  );
}

Trend.propTypes = {
  isTrending: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Trend;
