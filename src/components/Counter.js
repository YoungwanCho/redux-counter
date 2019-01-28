import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncreament, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={onIncreament}
      onContextMenu={(e)=> {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{
        backgroundColor: color
      }}>
      {number}
      </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncreament: PropTypes.func,
  onDecreament: PropTypes.func,
  onSetColor: PropTypes.func,
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncreament: () => console.warn('onIncrement note defined'),
  onDecreament: () => console.warn('onIncrement note defined'),
  onSetColor: () => console.warn('onIncrement note defined'),
};

export default Counter;