const $taskList = document.querySelector('.task-list');

$taskList?.addEventListener('click', (event: Event) => {
  if (!$taskList) throw new Error('The $taskList query failed');

  const $eventTarget = event.target as HTMLInputElement;

  console.log('event.target:', $eventTarget);
  console.log('event.target.tagName:', $eventTarget.tagName);

  if ($eventTarget.tagName === 'BUTTON') {
    console.log($eventTarget.closest('.task-list-item'));
    $eventTarget.closest('.task-list-item')?.remove();
  }
});
