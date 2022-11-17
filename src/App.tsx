import React, { FC } from 'react';

import './css/Global.css';

import Nav from './components/nav';
import Display from './components/Display';
import Invoice from './components/Invoice';
import Projects from './contexts/ProjectContext';


const App: FC = () => {
  return (
    <div className="App">
      <Projects>
        <Nav /> 
        <Display />
        <Invoice />
      </Projects>
    </div>
  );
}

export default App;
