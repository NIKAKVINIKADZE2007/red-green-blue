let red = document.getElementById('redbtn');
let blue = document.getElementById('bluebtn');
let green = document.getElementById('grennbtn');
let container = document.getElementById('container');

red.addEventListener('click', () => {
  let div = document.createElement('div');
  div.classList.add('red');
  container.appendChild(div);
});

blue.addEventListener('click', () => {
  let div = document.createElement('div');
  div.classList.add('blue');
  container.appendChild(div);
});

green.addEventListener('click', () => {
  let div = document.createElement('div');
  div.classList.add('green');
  container.appendChild(div);
});
