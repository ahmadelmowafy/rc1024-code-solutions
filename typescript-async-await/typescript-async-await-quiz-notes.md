# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  They are used as an alternative to `.then` and `.catch` methods for better readability.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  `Promise.then` and `Promise.catch` require to write separate statements for fulfilled or rejected Promises, while `async` and `await` wrap it in a try...catch block.

- When do you use `async`?
  It is used to define an asynchronous function

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  `await` is used with asynchronous functions when a Promise needs to be fulfilled or rejected prior to completing the async function.

- How do you handle errors with `await`?
  By using a try...catch statement in case the Promise is rejected

- What do `try`, `catch` and `throw` do? When do you use them?
  They are used to handle resolved and rejected Promises and use `throw` to throw an exception

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The function will continue to run regardless of whether the Promise is fulfilled or rejected

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await is preferred due to its readability and better error handling.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
