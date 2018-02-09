import React from 'react';

import Header from './content/Header.json';

function ContainerHeader() {
  return (
    <div>
      <h1> {Header.title} </h1>
    </div>
  );
}

export default ContainerHeader;
