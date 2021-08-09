import React from 'react';
import Content from './Content';

const Section = props => {
  const { theme } = props;
  return (
    <div>
      <p> Section !!! </p>
      <Content theme={theme} />
    </div>
  );
};

export default Section;
