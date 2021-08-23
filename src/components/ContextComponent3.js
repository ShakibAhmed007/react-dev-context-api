import React, { useContext } from 'react';
import ThemeContext from './ContextComponentContainer';
const ContextComponent3 = () => {
  const theme = useContext(ThemeContext);

  return <div> From Root node to component 3 {theme} theme</div>;
};

export default ContextComponent3;
