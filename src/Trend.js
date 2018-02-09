import React from 'react';
import PropTypes from 'prop-types';

import './css/Trend.css';
import logo from './media/trend-up.svg';

function Trend(props) {
  const logoDiv = <div className="logo-span"><img src={logo} alt="logo" /></div>;
  const logoHolder = props.isTrending ? logoDiv : null;
  return (
    <div className="trend-wrapper">
      <div className="title-span"> #{props.title} </div>
      {logoHolder}
    </div>
  );
}

Trend.propTypes = {
  isTrending: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Trend;
