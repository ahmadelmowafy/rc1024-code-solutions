# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To verify that changes occurred as expected.

- What is the purpose of events and event handling?
  To create dynamic and interactive web pages.

- Are all possible parameters required to use a JavaScript method or function?
  Not always required

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The addEventListener() method

- What is a callback function?
  A function passed in as an argument of another function

- What object is passed into an event listener callback when the event fires?
  The event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  The HTML element that was responsible for an event.

- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  The difference is passing in the function itself vs passing in the function call.

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
