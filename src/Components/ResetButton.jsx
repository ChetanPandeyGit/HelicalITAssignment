import React from 'react';

function ResetButton({ resetTodos }) {
  const handleReset = () => {
    resetTodos();
  };

  return (
    <button onClick={handleReset} className="reset-button">
      Reset
    </button>
  );
}

export default ResetButton;
