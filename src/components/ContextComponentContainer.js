import React from 'react';
import ContextComponent1 from './ContextComponent1';

/**
 * It returns an object with 2 values:
 * { Provider, Consumer }
 */
export const ThemeContext = React.createContext('light');

const ContextComponentContainer = () => {
  return (
    <>
      <p>Container</p>
      <ThemeContext.Provider value="light">
        <ContextComponent1 />
      </ThemeContext.Provider>
    </>
  );
};

export default ContextComponentContainer;
