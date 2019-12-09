const keyCode = document.getElementById('keyCode');

document.addEventListener('keydown', event => {
  keyCode.innerHTML = event.keyCode;
});
