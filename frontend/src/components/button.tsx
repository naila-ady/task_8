import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (value: string) => void;
  value: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, value, className }) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {children}
    </button>
  );
};

export default Button;
