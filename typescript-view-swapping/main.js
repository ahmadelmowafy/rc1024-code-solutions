'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');
$tabContainer?.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  if (!$eventTarget.matches('.tab')) {
    return;
  }
  for (let i = 0; i < $tabElements.length; i++) {
    if ($eventTarget === $tabElements[i]) {
      $tabElements[i].className = 'tab active';
    } else {
      $tabElements[i].className = 'tab';
    }
  }
  const $dataView = $eventTarget.dataset.view;
  for (let i = 0; i < $viewElements.length; i++) {
    if ($dataView === $viewElements[i].getAttribute('data-view')) {
      $viewElements[i].className = 'view';
    } else {
      $viewElements[i].className = 'view hidden';
    }
  }
});
