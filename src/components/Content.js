import React from 'react';
import HoverCounter from './HoverCounter';
import Counter from './Counter';

const Content = props => {
  const { theme } = props;
  return (
    <div>
      <p> Content !!! </p>
      <Counter
        render={(counter, incrementCount) => (
          <HoverCounter
            count={counter}
            incrementCount={incrementCount}
            theme={theme}
          />
        )}
      />
    </div>
  );
};

export default Content;
