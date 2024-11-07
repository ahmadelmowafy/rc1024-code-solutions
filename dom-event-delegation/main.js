'use strict';
const $taskList = document.querySelector('.task-list');
$taskList?.addEventListener('click', (event) => {
  if (!$taskList) throw new Error('The $taskList query failed');
  const $eventTarget = event.target;
  console.log('event.target:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);
  if ($eventTarget.tagName === 'BUTTON') {
    console.log($eventTarget.closest('.task-list-item'));
    $eventTarget.closest('.task-list-item')?.remove();
  }
});
