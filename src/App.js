import React from 'react';
import './style.css';
import ClickCounter from './components/ClickCounter';
import Section from './components/Section';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <h1>Render Props</h1>
      <p> Similar Functional Component should be reused </p>

      <Counter
        render={(counter, incrementCount) => (
          <ClickCounter count={counter} incrementCount={incrementCount} />
        )}
      />

      <Section />
    </div>
  );
}
