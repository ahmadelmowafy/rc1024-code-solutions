# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  When it is first added to the DOM and drawn on the page

- What is a React Effect?
  A way to perform a run code after rendering a component to synchronize it with a system outside of React.

- When should you use an Effect and when should you not use an Effect?
  Should be using an Effect when you want to step out of React and synchronize with something like an API. Should not use if you are only adjusting a state.

- When do Effects run?
  When a component is rendered on the DOM

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  A dependency is an array that is passed as a second argument to useEffect which prevents it from running more than once.

- Why would you want to clean up from an Effect?
  For Effects that need to specify how to undo whatever they were doing.

- How do you clean up from an Effect?
  By returning a function that will undo the effect of the callback function.

- When does the cleanup function run?
  When a value in the dependency array changes

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
