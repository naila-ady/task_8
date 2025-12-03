import { limitedEvaluate } from './evaluator';

describe('limitedEvaluate - Basic Operations', () => {
  it('should correctly add two numbers', () => {
    expect(limitedEvaluate('2+2')).toBe('4');
  });

  it('should correctly subtract two numbers', () => {
    expect(limitedEvaluate('5-3')).toBe('2');
  });

  it('should correctly multiply two numbers', () => {
    expect(limitedEvaluate('3*4')).toBe('12');
  });

  it('should correctly divide two numbers', () => {
    expect(limitedEvaluate('10/2')).toBe('5');
  });

  it('should handle multiple operations', () => {
    expect(limitedEvaluate('3*4-2')).toBe('10');
  });

  it('should handle decimal numbers', () => {
    expect(limitedEvaluate('2.5 + 1.5')).toBe('4');
  });

  it('should handle negative numbers', () => {
    expect(limitedEvaluate('-5 + 2')).toBe('-3');
  });

  it('should handle parentheses', () => {
    expect(limitedEvaluate('(2+3)*4')).toBe('20');
  });
});

describe('limitedEvaluate - Error Handling', () => {
  it('should return an error for division by zero', () => {
    expect(limitedEvaluate('1/0')).toBe('Error: Division by zero');
  });

  it('should return an error for square root of a negative number', () => {
    expect(limitedEvaluate('sqrt(-1)')).toBe('Error: Square root of negative number');
  });

  it('should return an error for logarithm of a non-positive number', () => {
    expect(limitedEvaluate('log(0)')).toBe('Error: Logarithm of non-positive number');
    expect(limitedEvaluate('ln(-5)')).toBe('Error: Natural logarithm of non-positive number');
  });

  it('should return an error for invalid expressions', () => {
    expect(limitedEvaluate('2 + *')).toContain('Error');
    expect(limitedEvaluate('abc')).toContain('Error');
  });
});

describe('limitedEvaluate - Scientific Operations', () => {
  it('should correctly calculate sine', () => {
    expect(limitedEvaluate('sin(0)')).toBe('0');
    expect(limitedEvaluate('sin(pi/2)')).toBeCloseTo(1);
  });

  it('should correctly calculate cosine', () => {
    expect(limitedEvaluate('cos(0)')).toBe('1');
    expect(limitedEvaluate('cos(pi)')).toBeCloseTo(-1);
  });

  it('should correctly calculate tangent', () => {
    expect(limitedEvaluate('tan(0)')).toBe('0');
  });

  it('should correctly calculate square root', () => {
    expect(limitedEvaluate('sqrt(16)')).toBe('4');
  });

  it('should correctly calculate logarithm (base 10)', () => {
    expect(limitedEvaluate('log(100)')).toBe('2');
  });

  it('should correctly calculate natural logarithm', () => {
    expect(limitedEvaluate('ln(e)')).toBeCloseTo(1);
  });

  it('should correctly calculate power', () => {
    expect(limitedEvaluate('2^3')).toBe('8');
    expect(limitedEvaluate('pow(2,4)')).toBe('16');
  });

  it('should handle expressions with mixed operations', () => {
    expect(limitedEvaluate('sin(pi/2) + sqrt(9)')).toBeCloseTo(4);
    expect(limitedEvaluate('log(100) * 2^3')).toBe('16');
  });
});
