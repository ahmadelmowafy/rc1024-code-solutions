# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  A property of the event object that tells us which element was interacted with

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  Because of JavaScript's event bubbling process, which causes the element triggering the event to notify its parent elements.

- What DOM element property tells you what type of element it is?
  the tagName property

- What does the `element.closest()` method take as its argument and what does it return?
  It takes the name of an element as its argument and returns the closes element with that name.

- How can you remove an element from the DOM?
  By using the remove() method of an element

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  By adding the event listener to the parent element.

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
