'use client';

import React, { useState } from 'react';
import Display from '@/components/display';
import Keypad from '@/components/keypad';
import { limitedEvaluate } from '@/lib/evaluator';

export default function CalculatorPage() {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      setResult(limitedEvaluate(expression));
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(prev => prev.slice(0, -1));
    } else {
      setExpression(prev => prev + value);
    }
  };

  return (
    <div className="calculator-grid">
      <Display expression={expression} result={result} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
}
