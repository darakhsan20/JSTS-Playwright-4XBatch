# JavaScript Keywords and Identifiers

This topic explains the difference between JavaScript keywords and identifiers, along with the naming rules used while writing valid JavaScript code.

## 1) JavaScript Keywords

Keywords are reserved words in JavaScript that have special meaning in the language. They cannot be used as variable names, function names, or identifiers.

Examples of JavaScript keywords:

```js
var
let
const
if
else
for
while
function
return
class
switch
case
break
continue
```

These words are used to define logic, control flow, declarations, and program structure.

## 2) JavaScript Identifiers

An identifier is the name we give to variables, functions, classes, or other user-defined elements in JavaScript.

Examples:

```js
var a = 10;
var name = "Amit";
var _value = 25;
var $amount = 50;
var total123 = 100;
```

These names are valid identifiers because they follow the naming rules.

## 3) Rules for Writing Identifiers

JavaScript identifiers must follow these rules:

1. The first character must be a letter, underscore (`_`), or dollar sign (`$`).
2. After the first character, digits may also be used.
3. Spaces are not allowed inside identifiers.
4. Keywords cannot be used as identifiers.
5. Identifiers are case-sensitive.
6. An identifier cannot start with a number.

### Valid identifiers

```js
var a = 10;
var _a = 23;
var $ = 10;
var ab123 = 23;
var Name = "Tazeen";
var name = "Amit";
```

### Invalid identifiers

```js
var 45 = 34;      // starts with a number
var d tazeen = "hello"; // contains space
// var if = 10;    // keyword cannot be used
```

## 4) Important Notes

- `var`, `let`, and `const` are keywords used for declaring variables.
- `_` and `$` are allowed as identifier starting characters.
- JavaScript is case-sensitive, so `Name` and `name` are treated as different variables.
- A variable name should be meaningful and easy to understand.

## 5) Example Program

```js
var a = 10;
console.log(a);

var $ = 10;
console.log($);

var _a = 23;
var pp = 34;

var ab123 = 23;
var _ = 10;

var Name = "Tazeen";
var name = "Amit";
```

## Summary

- Keywords are reserved words with special meanings.
- Identifiers are user-defined names used for variables and functions.
- Identifiers must follow naming rules to be valid in JavaScript.

This helps in writing clean and error-free JavaScript code.
