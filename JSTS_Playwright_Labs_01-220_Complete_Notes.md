# JavaScript, Playwright and TypeScript — Labs 01 to 220

## Complete Quick-Revision Guide

Source: JSTS Playwright 4X Batch

## Contents
1. Chapter 1: JavaScript Basics — Labs 01-02
2. Chapter 2: JavaScript Keywords and Identifiers — Labs 03-09
3. Chapter 3: JavaScript Literals — Labs 10-18
4. Chapter 4: JavaScript Operators — Labs 19-37
5. Chapter 5: Increment, Decrement and Nullish Operators — Labs 38-45
6. Chapter 6: If-Else Conditional Statements — Labs 46-49
7. Chapter 7: Switch Statements — Labs 50-58
8. Chapter 8: User Input — Labs 59-62
9. Chapter 9: For and Related Loops — Labs 63-69
10. Chapter 10: While Loops — Labs 70-73
11. Chapter 11: Do-While Loops — Labs 74-77
12. Chapter 12: Arrays — Labs 78-99
13. Chapter 13: Functions — Labs 101-116
14. Chapter 14: const, let, var, Hoisting and TDZ — Labs 117-127
15. Chapter 15: Closures — Labs 128
16. Chapter 16: Strings — Labs 129-131
17. Chapter 17: Objects — Labs 132-139
18. Chapter 18: Multidimensional Arrays — Labs 140-146
19. Chapter 19: Callbacks — Labs 147-154
20. Chapter 20: Promises — Labs 155-161
21. Chapter 21: Async/Await — Labs 162-171
22. Chapter 22: Export and Import — Labs 172-174
23. Chapter 23: Classes and Objects — Labs Actual: class.js
24. Chapter 24: Playwright Fundamentals — Labs Playwright chapter
25. Chapter 25: Constructors and Encapsulation — Labs 176-187
26. Chapter 26: OOP Encapsulation — Labs 188-194
27. Chapter 27: Inheritance — Labs 195-207
28. Chapter 28: Polymorphism — Labs 208-209
29. Chapter 29: JavaScript Interview Questions — Labs 210-213
30. Chapter 30: TypeScript Introduction — Labs 214-215
31. Chapter 31: TypeScript Types and Functions — Labs 216-220

## Chapter 1: JavaScript Basics

**Lab coverage:** 01-02

- JavaScript runs on a JavaScript engine.
- `console.log()` prints values to the console.
- `+` adds numbers but concatenates strings.
- Semicolons are optional but using them consistently is clearer.

```javascript
console.log("Hello, JavaScript!");
let sum = 10 + 20;
console.log(sum);
```

## Chapter 2: JavaScript Keywords and Identifiers

**Lab coverage:** 03-09

- Keywords are reserved words such as `let`, `const`, `var`, and `function`.
- Identifiers name variables, functions, classes, and properties.
- Use meaningful camelCase names: `firstName`, `loginTest`.
- Comments: `//` for one line and `/* ... */` for blocks.

```javascript
// Meaningful identifiers
let userName = "Pramod";
console.log(userName);
```

## Chapter 3: JavaScript Literals

**Lab coverage:** 10-18

- Literals are fixed values written directly: strings, numbers, `null`, and `undefined`.
- `null` is an intentional no-value; `undefined` means no assigned value.
- Numbers can be integers, decimals, binary, octal, hexadecimal, and exponential.
- Use `typeof` to identify a primitive type.

```javascript
let count = 10;
let price = 99.99;
let selected = null;
let future;
console.log(typeof count, typeof selected);
```

## Chapter 4: JavaScript Operators

**Lab coverage:** 19-37

- Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`.
- Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- Prefer `===` and `!==`; `&&`, `||`, `!` control logical flow.

```javascript
let a = 5;
let b = "5";
console.log(a == b);   // true
console.log(a === b);  // false
console.log(a > 3 && b !== null);
```

## Chapter 5: Increment, Decrement and Nullish Operators

**Lab coverage:** 38-45

- `++x` increments before use; `x++` increments after use.
- `--x` decrements before use; `x--` decrements after use.
- Nullish coalescing `??` falls back only for `null` or `undefined`.
- Do not confuse `??` with `||`; `||` also replaces `0`, ``, and `false`.

```javascript
let value;
let result = value ?? "default";
console.log(result); // default
let x = 5;
console.log(++x, x++);
```

## Chapter 6: If-Else Conditional Statements

**Lab coverage:** 46-49

- `if` runs when true; `else` runs when false.
- Use `else if` for ordered branches.
- Nested conditions handle combinations.
- Truthiness: `0`, ``, `null`, `undefined`, `NaN`, and `false` are falsy.

```javascript
let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

## Chapter 7: Switch Statements

**Lab coverage:** 50-58

- `switch` compares one value against each `case` using strict equality.
- `break` prevents fall-through into later cases.
- `default` handles no matching case.
- Group cases only when they intentionally share the same behavior.

```javascript
let status = 200;
switch (status) {
  case 200: console.log("OK"); break;
  case 404: console.log("Not Found"); break;
  default: console.log("Other");
}
```

## Chapter 8: User Input

**Lab coverage:** 59-62

- Browser input commonly uses `prompt()`.
- Node input may use `readline`, `prompt-sync`, or `fs`.
- Input is usually a string; convert with `Number()` or `parseInt()`.
- Always validate input before using it.

```javascript
const prompt = require("prompt-sync")({ sigint: true });
let name = prompt("Name: ");
console.log("Hello", name);
```

## Chapter 9: For and Related Loops

**Lab coverage:** 63-69

- `for` syntax: initialization, condition, update.
- `break` exits; `continue` skips the current iteration.
- Use `for...of` for iterable values and `for...in` for object keys.
- Avoid changing loop counters unexpectedly.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

## Chapter 10: While Loops

**Lab coverage:** 70-73

- `while` checks before each iteration.
- Ensure the loop condition eventually becomes false.
- Use `break` for an early exit.
- Prefer `while` when iterations depend on changing state.

```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

## Chapter 11: Do-While Loops

**Lab coverage:** 74-77

- `do...while` executes the body once before checking the condition.
- Suitable for menus, retries, and prompts requiring at least one attempt.
- Remember the terminating semicolon after `while (...)`.
- Always update the condition variable inside the body.

```javascript
let attempt = 0;
do {
  attempt++;
  console.log("Attempt", attempt);
} while (attempt < 3);
```

## Chapter 12: Arrays

**Lab coverage:** 78-99

- Arrays are ordered collections; indexes start at `0`.
- Add/remove: `push`, `pop`, `shift`, `unshift`, `splice`.
- Transform: `map`, `filter`, `reduce`, `find`, `findIndex`, `sort`.
- Slice copies a range; spread `[...]` copies or combines arrays.

```javascript
let names = ["John", "Jane"];
names.push("Amit");
let upper = names.map(n => n.toUpperCase());
console.log(upper);
```

## Chapter 13: Functions

**Lab coverage:** 101-116

- A function declaration can be called after its declaration or through hoisting.
- Parameters receive values; `return` sends one value back.
- Function expressions and arrow functions are values.
- IIFE runs immediately; spread passes array values as arguments.

```javascript
function add(a, b) { return a + b; }
const multiply = (a, b) => a * b;
console.log(add(2, 3), multiply(2, 3));
```

## Chapter 14: const, let, var, Hoisting and TDZ

**Lab coverage:** 117-127

- `const` must initialize and cannot reassign; objects can still mutate.
- `let` is block-scoped and reassignable.
- `var` is function-scoped and hoisted.
- `let`/`const` exist in the Temporal Dead Zone until declaration.

```javascript
let count = 1;
count++;
const name = "QA";
// console.log(before); let before = 1; // TDZ
```

## Chapter 15: Closures

**Lab coverage:** 128

- A closure retains access to variables from its lexical scope.
- It is created when an inner function is defined inside an outer function.
- Common uses: private state, counters, and callbacks.
- Be aware of retaining large objects longer than needed.

```javascript
function counter() {
  let count = 0;
  return () => ++count;
}
const next = counter();
console.log(next(), next());
```

## Chapter 16: Strings

**Lab coverage:** 129-131

- Strings are immutable.
- Useful methods: `length`, `toUpper`, `toLower`, `trim`, `slice`, `includes`, `replace`.
- Use template literals for interpolation.
- `indexOf` gives the position or `-1`; `startsWith`/`endsWith` test boundaries.

```javascript
let text = "Playwright Testing";
console.log(text.includes("Test"));
console.log(`Length: ${text.length}`);
```

## Chapter 17: Objects

**Lab coverage:** 132-139

- Objects store key/value pairs.
- Create with literals `{}`, access with dot or bracket notation.
- Use spread to copy top-level properties.
- Shallow copy shares nested references; deep copy duplicates nested structure.

```javascript
let person = { name: "John", age: 30 };
let copy = { ...person, role: "QA" };
console.log(copy.name, copy.role);
```

## Chapter 18: Multidimensional Arrays

**Lab coverage:** 140-146

- A 2D array is an array of arrays.
- Access with `array[row][column]`.
- Nested loops traverse rows and columns.
- Useful for grids, tables, matrices, and patterns.

```javascript
let matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]); // 3
```

## Chapter 19: Callbacks

**Lab coverage:** 147-154

- A callback is a function passed to another function.
- Callbacks may be synchronous or asynchronous.
- Callback hell occurs with deeply nested callbacks.
- Promises and async/await improve readability.

```javascript
function run(task) { task(); }
run(() => console.log("Callback executed"));
```

## Chapter 20: Promises

**Lab coverage:** 155-161

- Promise states: pending, fulfilled, rejected.
- `then` handles success, `catch` handles failure, `finally` always executes.
- `Promise.all` waits for all; it rejects immediately on any rejection.
- `Promise.allSettled` reports every result; `Promise.race` resolves/rejects first.

```javascript
const p = Promise.resolve(200);
p.then(v => console.log(v)).catch(e => console.log(e));
```

## Chapter 21: Async/Await

**Lab coverage:** 162-171

- `async` functions always return a Promise.
- `await` pauses within async function until the Promise settles.
- Use `try/catch/finally` for error handling.
- Sequential `await` is slower; `Promise.all` runs independent tasks concurrently.

```javascript
async function fetchStatus() {
  try { return await Promise.resolve(200); }
  catch (e) { throw e; }
}
```

## Chapter 22: Export and Import

**Lab coverage:** 172-174

- `export` exposes values; `export default` exposes one default.
- `import { name }` imports named exports.
- Use aliases when names conflict.
- Node ES modules may require `.js` extensions and module configuration.

```javascript
export const BASE_URL = "https://api.example.com";
import { BASE_URL } from "./utils.js";
```

## Chapter 23: Classes and Objects

**Lab coverage:** Actual: class.js

- A class is a blueprint; `new Class()` creates an object.
- Instance fields store object state; methods store behavior.
- Private fields use `#name`.
- Methods do not use `function` inside a class.

```javascript
class Person {
  #name;
  eat() { console.log("Eating"); }
}
const person = new Person();
```

## Chapter 24: Playwright Fundamentals

**Lab coverage:** Playwright chapter

- A test uses `test(name, async ({ page }) => {})`.
- Locators find elements; prefer role/label-based locators.
- `goto` navigates; `expect(locator).toBeVisible()` verifies UI.
- Config defines test directory, browsers, workers, retries, and trace reporting.

```javascript
test('login heading', async ({ page }) => {
  await page.goto('/login');
  await expect(page.getByRole('heading')).toBeVisible();
});
```

## Chapter 25: Constructors and Encapsulation

**Lab coverage:** 176-187

- `constructor` initializes a new instance.
- `this.property` creates or updates instance state.
- Private fields use `#field` and are accessible only inside the class.
- Getters return data; setters validate updates.

```javascript
class Credentials {
  #apiKey;
  constructor(user, key) { this.user = user; this.#apiKey = key; }
  getKey() { return this.#apiKey; }
}
```

## Chapter 26: OOP Encapsulation

**Lab coverage:** 188-194

- Encapsulation hides internal state and exposes controlled behavior.
- Public methods act as an interface to private data.
- Benefits: validation, security, maintainability, and loose coupling.
- Bank/account examples demonstrate getters and controlled deposits/withdrawals.

```javascript
class Account {
  #balance = 0;
  deposit(amount) { if (amount > 0) this.#balance += amount; }
  getBalance() { return this.#balance; }
}
```

## Chapter 27: Inheritance

**Lab coverage:** 195-207

- `extends` creates an inheritance relationship.
- `super(...)` calls the parent constructor; `super.method()` calls a parent method.
- Types: single, multilevel, multiple via mixins, hierarchical, and hybrid.
- JavaScript supports mixins; it does not support multiple inheritance with multiple `extends`.

```javascript
class Animal { speak() { console.log("Sound"); } }
class Dog extends Animal {
  speak() { super.speak(); console.log("Bark"); }
}
```

## Chapter 28: Polymorphism

**Lab coverage:** 208-209

- Polymorphism means the same operation can behave differently by type.
- Runtime polymorphism uses method overriding.
- Compile-time polymorphism is achieved differently in JavaScript, mainly through dynamic dispatch.
- A parent variable can reference a child object and call overridden behavior.

```javascript
class Shape { area() { return 0; } }
class Circle extends Shape { area() { return 3.14 * 1 * 1; } }
```

## Chapter 29: JavaScript Interview Questions

**Lab coverage:** 210-213

- Compare values carefully: loose vs strict equality.
- Trace hoisting, scope, closures, arrays, and `this` explicitly.
- Order of execution matters in async code.
- Always explain the output by state and call sequence.

```javascript
console.log([] == false); // true: coercion
console.log([] === false); // false
```

## Chapter 30: TypeScript Introduction

**Lab coverage:** 214-215

- `use strict` enables strict JavaScript behavior.
- TypeScript compiles into JavaScript.
- Use annotations to describe variable and function types.
- Type checking catches errors during development.

```javascript
"use strict";
let testName: string = "Pramod";
console.log(testName);
```

## Chapter 31: TypeScript Types and Functions

**Lab coverage:** 216-220

- Primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `never`.
- Arrays: `number[]` or `Array<number>`.
- `any` disables checks; prefer `unknown` and narrow it.
- `void` means no useful return; `never` means no normal completion.

```javascript
const multiply = (a: number, b: number): number => a * b;
let user: { name: string; age: number } = { name: "John", age: 30 };
```

## Quick Exam Checklist
- Use `===` instead of `==` unless coercion is intentional.
- Trace `var`, `let`, and `const` through scope and hoisting.
- Know array mutation methods versus copy/transform methods.
- Explain closures, callbacks, promises, and async/await with one example.
- Use `Promise.all` for independent work; use `allSettled` when every result is needed.
- For Playwright: prefer role locators and assertions tied to visible UI behavior.
- For OOP: constructor, encapsulation, inheritance, and polymorphism are the core terms.
- For TypeScript: type first, then add unknown-safe runtime checks.