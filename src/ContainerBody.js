import React from 'react';

import Trend from './Trend';

import Trends from './content/Trends.json';

function ContainerBody() {
  const trendArray = Trends.map(trend => (
    <li>
      <Trend title={trend.title} isTrending={trend.isTrending} />
    </li>
  ));
  return (
    <div>
      <ul>
        {trendArray}
      </ul>
    </div>
  );
}

export default ContainerBody;
