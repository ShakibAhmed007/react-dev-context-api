import React from 'react';

class HoverCounter extends React.Component {
  render() {
    const { count, incrementCount, theme } = this.props;
    const style =
      theme === 'dark'
        ? { backgroundColor: '#000000', color: '#ffffff' }
        : null;
    return (
      <div>
        <div>
          <h1 onMouseOver={incrementCount} style={style}>
            Hovered {count} Times
          </h1>
        </div>
      </div>
    );
  }
}

export default HoverCounter;
