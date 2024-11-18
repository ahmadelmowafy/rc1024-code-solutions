# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The element where the event was triggered

- What is the effect of setting an element to `display: none`?
  It is hidden and removed from document flow

- What does the `element.matches()` method take as an argument and what does it return?
  Takes a property name as an argument and returns a boolean value if it matches the value of that property

- How can you retrieve the value of an element's attribute?
  By using the getAttribute() function

- At what steps of the solution would it be helpful to log things to the console?
  When we query the DOM for an element and to make sure we are referencing the element correctly.

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  We would add an event listener to each individual .tab element

- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  Apply the class for each individual element.

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
