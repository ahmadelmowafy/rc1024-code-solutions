'use strict';
let timesClicked = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
$hotButton.addEventListener('click', () => {
  timesClicked++;
  if (!$hotButton || !$clickCount) {
    throw new Error('The $hotButton or !$clickCount query failed');
  }
  $clickCount.textContent = 'Clicks: ' + timesClicked;
  if (timesClicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (timesClicked >= 4 && timesClicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (timesClicked >= 7 && timesClicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (timesClicked >= 10 && timesClicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (timesClicked >= 13 && timesClicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
