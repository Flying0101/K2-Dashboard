import React, { FC } from 'react';

import './css/Global.css';

import Nav from './components/nav';
import Display from './components/Display';
import Invoice from './components/Invoice';

const App: FC = () => {
  return (
    <div className="App">
      <Nav />
      <Display />
      <Invoice />
    </div>
  );
}

export default App;
