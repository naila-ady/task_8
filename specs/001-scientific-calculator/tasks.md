# Implementation Tasks: Scientific Calculator

**Feature Branch**: `001-scientific-calculator` | **Date**: 2025-12-03 | **Spec**: [specs/001-scientific-calculator/spec.md](specs/001-scientific-calculator/spec.md)
**Plan**: [specs/001-scientific-calculator/plan.md](specs/001-scientific-calculator/plan.md)

## Summary

This document outlines the tasks for building a scientific calculator with a Next.js UI, including project setup, UI components, expression evaluation, and error handling. Tasks are organized by user story and prioritized.

## Dependencies

User Story 1 (Basic Calculations) -> User Story 3 (Invalid Input Handling) -> User Story 2 (Scientific Calculations)

## Implementation Strategy

Implement the Minimum Viable Product (MVP) first, focusing on basic calculations and robust error handling (P1 stories). Incrementally add scientific functions (P2 story). Each user story phase is designed to be independently testable and deployable.

## Phase 1: Setup (Project Initialization)

- [ ] T001 Create a new Next.js TypeScript project in the `frontend/` directory using `npx create-next-app@latest frontend --typescript --app --eslint --tailwind --src-dir --import-alias "@/*" --use-npm`
- [ ] T002 Set up a basic layout in `frontend/app/layout.tsx` to center the calculator on the page.
- [ ] T003 Add simple global styles in `frontend/app/globals.css` for basic calculator presentation.

## Phase 2: Foundational (Common UI Components & Evaluator Module)

- [ ] T004 [P] Create a `<Display />` React component in `frontend/components/display.tsx` that shows the current expression and result.
- [ ] T005 [P] Create a generic `<Button />` React component in `frontend/components/button.tsx` for calculator keys.
- [ ] T006 Create a `<Keypad />` React component in `frontend/components/keypad.tsx` that arranges `Button` components.
- [ ] T007 Implement the basic operator buttons (+, -, ×, ÷, =, C, DEL) within `<Keypad />`.
- [ ] T008 Implement number buttons (0-9, decimal point) within `<Keypad />`.
- [ ] T009 Create a safe expression evaluator module `frontend/lib/evaluator.ts` with placeholder functions for basic operations.

## Phase 3: User Story 1 - Perform Basic Calculations (Priority: P1)

**Goal**: As a user, I want to perform basic arithmetic operations (addition, subtraction, multiplication, division) so I can get quick results for simple math problems.
**Independent Test**: Enter a basic expression like "2 + 3", "10 - 4", "5 * 6", "12 / 3" and verify the correct result is displayed.

- [ ] T010 [US1] Integrate `<Display />` and `<Keypad />` into the main calculator page `frontend/app/(calculator)/page.tsx`.
- [ ] T011 [US1] Implement basic arithmetic logic (add, subtract, multiply, divide) in `frontend/lib/evaluator.ts`.
- [ ] T012 [US1] Connect the `=` button click event to trigger expression evaluation using `frontend/lib/evaluator.ts` and update the display.
- [ ] T013 [US1] Connect the `C` (clear all) and `DEL` (delete last character) button click events to update the expression state.
- [ ] T014 [US1] Add unit tests for basic operations in `frontend/lib/evaluator.test.ts` (e.g., "2+2", "3*4-2").

## Phase 4: User Story 3 - Handle Invalid Input (Priority: P1)

**Goal**: As a user, I want to receive clear and informative error messages when I enter an invalid expression so I can understand what went wrong and correct my input.
**Independent Test**: Enter invalid expressions like "2 + ", "sqrt(-1)", "abc" and verify clear error messages are displayed without crashing the app.

- [ ] T015 [US3] Implement robust error handling in `frontend/lib/evaluator.ts` to catch and return specific error types (e.g., division by zero, invalid function arguments, syntax errors).
- [ ] T016 [US3] Update the calculator page `frontend/app/(calculator)/page.tsx` to display error messages from the evaluator in the `<Display />` component.
- [ ] T017 [US3] Ensure the UI allows continued editing after an error is displayed.
- [ ] T018 [US3] Add unit tests for error cases in `frontend/lib/evaluator.test.ts` (e.g., "2/0", "sqrt(-1)", "sin(", "abc").

## Phase 5: User Story 2 - Perform Scientific Calculations (Priority: P2)

**Goal**: As a user, I want to perform scientific operations like power, square root, logarithm, sine, cosine, and tangent so I can solve more complex mathematical problems.
**Independent Test**: Enter scientific expressions like "pow(2, 3)", "sqrt(9)", "log(10)", "sin(0)" and verify the correct results.

- [ ] T019 [P] [US2] Add scientific buttons (sin, cos, tan, log, ln, sqrt, power ^, parentheses) to the `<Keypad />` component in `frontend/components/keypad.tsx`.
- [ ] T020 [US2] Extend `frontend/lib/evaluator.ts` to support scientific functions (sin, cos, tan, log, ln, sqrt, power `^`).
- [ ] T021 [US2] Add unit tests for scientific operations in `frontend/lib/evaluator.test.ts` (e.g., "sin(0)", "cos(0)", "sqrt(16)", "2^3", "log(10)").

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T022 Make the UI responsive for desktop and mobile devices by updating styles in `frontend/app/globals.css` and component-specific CSS.
- [ ] T023 Implement a simple light/dark mode toggle (optional, if time allows).
- [ ] T024 Write a `README.md` in the project root with instructions on how to run the Next.js app, supported functions, example expressions, and any evaluator limitations.
