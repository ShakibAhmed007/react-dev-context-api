import React from 'react';
import ContextComponent1 from './ContextComponent1';

/**
 * Create Context
 * It returns an object with 2 values:
 * { Provider, Consumer }
 */
export const ThemeContext = React.createContext();

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
