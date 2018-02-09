import React from 'react';
import PropTypes from 'prop-types';

import './css/Trend.css';
import logo from './media/trend-up.svg';

function Trend(props) {
  const myStyle = {
    width: '80px',
    visibility: props.isTrending ? 'show' : 'hidden',
  };
  return (
    <div className="trend-wrapper">
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
