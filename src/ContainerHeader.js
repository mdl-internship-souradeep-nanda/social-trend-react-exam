import React from 'react';

import Header from './content/Header.json';

import './css/ContainerHeader.css';

function ContainerHeader() {
  return (
    <div className="container-header-wrapper">
      <h1> {Header.title} </h1>
    </div>
  );
}

export default ContainerHeader;
