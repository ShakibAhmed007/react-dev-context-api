import React from 'react';
import ContextComponent1 from './ContextComponent1';

const ThemeContext = React.createContext('light');

const ContextComponentContainer = () => {
  return (
    <ThemeContext.Provider value="dark">
      <p>Container</p>
      <ContextComponent1 />
    </ThemeContext.Provider>
  );
};

export default ContextComponentContainer;
