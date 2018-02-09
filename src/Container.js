import React from 'react';

import './css/Container.css';

import ContainerHeader from './ContainerHeader';
import ContainerBody from './ContainerBody';

function Container() {
  return (
    <div className="container-wrapper">
      <ContainerHeader />
      <ContainerBody />
    </div>
  );
}

export default Container;
