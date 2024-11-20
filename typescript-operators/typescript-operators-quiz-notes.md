# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  They are used to check if two expressions are truthy or if at least one expression is truthy, respectively. When used outside `if` statements, the && operator will return the value of the falsy expression if it exists, or the second truthy expression. The || operator will return the first truthy expression.

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  Short-circuit evaluation is a type of evaluation where it checks if an operand is true or false, and stops evaluating the remaining operands as soon as the result of one expression is false(`&&` operator) or is evaluated to the first truthy expression (`||` operator)

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Evaluates if an expression is null or undefined, and returns another expression if it is. Otherwise, it will return the original expression if not null or undefined.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  Evaluates a certain expression if a condition is true, and another expression if the condition false. It works the same way as an if/else statement.

- What is the `?.` (optional chaining) operator? When would you use it?
  Used to check if an object or property is null or undefined, and returns undefined if it is.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Allows an array to be expanded in a place where elements are expected, and an object to be expanded in a place where key/value pairs are expected.

- What data types can be spread into an array? Into an object?
  Only iterable values (arrays and strings) can be spread into an array, arrays and objects can be spread into an object.

- How does spread syntax differ from rest syntax?
  Spread syntax expands an array into its elements, while rest syntax condenses multiple elements into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
