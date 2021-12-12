import React from 'react';
import Navigator from './components/Navigator';

const App = () => (
  <div className="main_container">
    <div className="header_bar">
      <h1 className="header_title">Ravn Star Wars Registry</h1>
    </div>
    <div>
      <Navigator />
    </div>
  </div>
);

export default App;
