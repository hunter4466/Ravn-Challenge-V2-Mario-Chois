import React from 'react';
import Navigator from './components/Navigator';

const App = () => (
  <div className="main_container">
    <div className="header_bar">
      <h2 className="header_title">Ravn Star Wars Registry</h2>
    </div>
    <div>
      <Navigator />
    </div>
  </div>
);

export default App;
