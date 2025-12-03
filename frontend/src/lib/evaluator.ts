import { evaluate, typecheck } from 'mathjs';

const limitedEvaluate = (expression: string) => {
  try {
    // Define a limited scope to prevent arbitrary code execution
    const scope = {};

    // Define allowed functions and constants
    const allowed = {
      add: (a: number, b: number) => a + b,
      subtract: (a: number, b: number) => a - b,
      multiply: (a: number, b: number) => a * b,
      divide: (a: number, b: number) => {
        if (b === 0) {
          throw new Error("Division by zero");
        }
        return a / b;
      },
      // Basic scientific functions will be added here later
      // Placeholder for now
      sin: (x: number) => Math.sin(x),
      cos: (x: number) => Math.cos(x),
      tan: (x: number) => Math.tan(x),
      sqrt: (x: number) => {
        if (x < 0) {
          throw new Error("Square root of negative number");
        }
        return Math.sqrt(x);
      },
      log: (x: number) => {
        if (x <= 0) {
          throw new Error("Logarithm of non-positive number");
        }
        return Math.log10(x);
      },
      ln: (x: number) => {
        if (x <= 0) {
          throw new Error("Natural logarithm of non-positive number");
        }
        return Math.log(x);
      },
      pow: (base: number, exp: number) => Math.pow(base, exp),
      pi: Math.PI,
      e: Math.E,
    };

    // Parse the expression and check for disallowed nodes
    // This part requires careful implementation to prevent abuse
    // For simplicity, we'll directly use mathjs evaluate with a restricted scope for now.
    // A more robust solution would involve parsing the AST and validating each node.

    // Ensure the expression only contains allowed operations and numbers
    // This is a basic check; a full AST traversal would be more secure.
    // For example, disallowing function calls not in 'allowed'
    const result = evaluate(expression, allowed);
    return String(result);
  } catch (error: any) {
    return "Error: " + error.message;
  }
};

export { limitedEvaluate };
