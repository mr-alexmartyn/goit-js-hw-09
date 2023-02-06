function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

const backgroundSwitcher = function () {
  body.style.backgroundColor = getRandomHexColor();
  body.style.color = getRandomHexColor();
};

buttonStart.addEventListener('click', () => {
  timerId = setInterval(backgroundSwitcher, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
});
