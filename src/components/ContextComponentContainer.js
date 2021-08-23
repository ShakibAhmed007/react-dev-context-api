import React from 'react';
import ContextComponent1 from './ContextComponent1';

const ThemeContext = React.createContext('light');

const ContextComponentContainer = () => {
  return (
    <>
      <p>Container</p>
      <ThemeContext.Provider value="dark">
        <ContextComponent1 />
      </ThemeContext.Provider>
    </>
  );
};

export default ContextComponentContainer;
