# Research Plan: Scientific Calculator Evaluation and UI

## Research Questions

### 1. Expression Evaluation Library/Approach

**Context**: The plan requires a safe and robust expression evaluator for basic and scientific operations (e.g., +, -, *, /, ^, sin, cos, tan, log, ln, sqrt).

**Question**: What are the recommended parsing libraries for client-side JavaScript (Next.js/React) that support safe mathematical expression evaluation with a configurable set of allowed functions? Alternatively, what are the considerations for implementing a custom tokenizer + shunting-yard parser?

**Expected Outcome**: A decision on whether to use an existing library (e.g., mathjs configured for safety) or a custom implementation, with a brief rationale.

### 2. UI Testing Framework

**Context**: The plan includes adding basic UI tests to verify button functionality and expression string updates in a Next.js/React application.

**Question**: What are the most suitable UI testing frameworks for a Next.js/React application, considering ease of setup, integration with Jest/React Testing Library, and capabilities for component and end-to-end testing?

**Expected Outcome**: A recommendation for a specific UI testing framework (e.g., Playwright or Cypress) with a brief justification.

### 3. Detailed Performance Goals

**Context**: The plan currently lacks specific performance goals for the calculator. A default of "Evaluations complete in <100ms for typical expressions; UI remains responsive at 60fps" was assumed.

**Question**: What are reasonable and specific performance goals for a client-side scientific calculator, considering user experience for various types of expressions (simple, complex, scientific) and responsiveness on different devices?

**Expected Outcome**: Refined, measurable performance goals (e.g., specific latency targets for different expression complexities, UI update rates).
