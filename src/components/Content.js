import React from 'react';
import HoverCounter from './HoverCounter';
import Counter from './Counter';

const Content = () => {
  return (
    <div>
      <p> Content !!! </p>
      <Counter
        render={(counter, incrementCount) => (
          <HoverCounter count={counter} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
};

export default Content;
