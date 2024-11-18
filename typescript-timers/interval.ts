const $countdown = document.querySelector('h1');
if (!$countdown) throw new Error('$countdown not found');
let $number = parseInt(document.querySelector('h1').textContent);

const intervalID = setInterval(function () {
  $number--;
  document.querySelector('h1').textContent = $number;
  if ($number === 0) {
    clearInterval(intervalID);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
