import React from 'react';

import './css/ContainerBody.css';

import Trend from './Trend';

import Trends from './content/Trends.json';

function ContainerBody() {
  const trendArray = Trends.map(trend => (
    <div>
      <Trend title={trend.title} isTrending={trend.isTrending} />
    </div>
  ));
  return (
    <div className="container-body-wrapper">
      {trendArray}
    </div>
  );
}

export default ContainerBody;
