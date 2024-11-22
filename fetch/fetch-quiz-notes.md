# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  Returns a Promise which is fulfilled with a Response object representing the server's response.

- What is the default request method used by `fetch()`?
  `GET`

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Pass an options object as the second argument to fetch(), setting the method property to the desired method `fetch(url, { method: 'POST' });`

- How does `fetch` report errors?
  By checking the `response.ok` property, it will indicate whether there was an error in the HTTP request.

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
