'use strict';
const $lightBulb = document.querySelector('.light-bulb');
const $background = document.querySelector('body');
if (!$lightBulb) throw new Error('The $lightBulb query failed');
if (!$background) throw new Error('The $background query failed');
$lightBulb.addEventListener('click', () => {
  $lightBulb.className = 'light-bulb-dark';
  $background.className = 'dark';
});
