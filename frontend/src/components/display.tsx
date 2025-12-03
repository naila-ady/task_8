import React from 'react';

interface DisplayProps {
  expression: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div className="display">
      <div className="previous-operand">{expression}</div>
      <div className="current-operand">{result}</div>
    </div>
  );
};

export default Display;
