const $message = document.querySelector('h1');
if (!$message) throw new Error('$message not found');

setTimeout(function () {
  $message.textContent = 'Hello There';
}, 2000);
