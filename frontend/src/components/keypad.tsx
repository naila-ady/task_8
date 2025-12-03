import React from 'react';
import Button from './button';

interface KeypadProps {
  onButtonClick: (value: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onButtonClick }) => {
  const buttons = [
    { value: 'C', className: 'clear span-two' },
    { value: 'DEL', className: 'operator' },
    { value: '(', className: 'operator' },
    { value: ')', className: 'operator' },
    { value: 'sin', className: 'operator' },
    { value: 'cos', className: 'operator' },
    { value: 'tan', className: 'operator' },
    { value: 'log', className: 'operator' },
    { value: 'ln', className: 'operator' },
    { value: 'sqrt', className: 'operator' },
    { value: '^', className: 'operator' },
    { value: '/', className: 'operator' },
    { value: '1', className: '' },
    { value: '2', className: '' },
    { value: '3', className: '' },
    { value: '*' , className: 'operator'},
    { value: '4', className: '' },
    { value: '5', className: '' },
    { value: '6', className: '' },
    { value: '+', className: 'operator' },
    { value: '7', className: '' },
    { value: '8', className: '' },
    { value: '9', className: '' },
    { value: '-', className: 'operator' },
    { value: '.', className: '' },
    { value: '0', className: '' },
    { value: '=', className: 'equals span-two' },
  ];

  return (
    <div className="calculator-grid">
      {buttons.map((button) => (
        <Button
          key={button.value}
          value={button.value}
          onClick={onButtonClick}
          className={button.className}
        >
          {button.value}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
