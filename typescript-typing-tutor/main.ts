let currentIndex = 0;

const $characters = document.querySelectorAll('span');
let $currentChar = $characters[currentIndex];

document.addEventListener('keydown', (event: KeyboardEvent) => {
  console.log($currentChar.textContent);
  if (event.key === $currentChar.textContent) {
    $currentChar.className = 'correct';
    currentIndex++;
    $currentChar = $characters[currentIndex];
    $currentChar.className = 'current';
  } else {
    $currentChar.className = 'incorrect';
  }
});
