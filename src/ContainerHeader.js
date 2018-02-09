import React from 'react';

import Header from './content/Header.json';

import './css/ContainerHeader.css';

function ContainerHeader() {
  return (
    <div className="container-header-wrapper">
      {Header.title}
    </div>
  );
}

export default ContainerHeader;
