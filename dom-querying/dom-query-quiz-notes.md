# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  To verify that changes occurred as expected.

- What is a "model"?
  A representation of a web page.

- Which "document" is being referred to in the phrase Document Object Model?
  The HTML document or the webpage.

- What is the word "object" referring to in the phrase Document Object Model?
  An object containing all of the document's elements as properties

- What is a DOM Tree?
  A structure containing nodes as the elements of the HTML page.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.querySelector() and document.getElementById()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  Because querying the DOM normally searches through all of the HTML to find the queried element.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  Because the browser needs to parse through all of the elements in an HTML page before JS can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  Takes a selector as its argument and returns the value of the first element that matches that selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes a selector as its argument and returns the value of all elements that match that selector.

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
