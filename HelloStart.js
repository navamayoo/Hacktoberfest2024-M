import React from 'react';

function HelloStart() {
  const handleClick = () => {
    alert('Hello, World!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick}>Hello World</button>
    </div>
  );
}

export default HelloStart;
