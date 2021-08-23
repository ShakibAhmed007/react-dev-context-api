import React from 'react';
import './style.css';
import ClickCounter from './components/ClickCounter';
import Section from './components/Section';
import Counter from './components/Counter';
import ContextComponentContainer from './components/ContextComponentContainer';

export default class App extends React.Component {
  state = {
    theme: 'dark'
  };
  render() {
    const { theme } = this.state;
    return (
      <div>
        <h1>Context Api</h1>
        <Counter
          render={(counter, incrementCount) => (
            <ClickCounter count={counter} incrementCount={incrementCount} />
          )}
        />
        <Section theme={theme} />
        <hr />
        <hr />
        <ContextComponentContainer />
      </div>
    );
  }
}
