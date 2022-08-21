/* eslint-disable no-loop-func */
/* eslint-disable sonarjs/no-identical-functions */
const colorSelected = document.querySelector('#color-palette');
const container = document.querySelector('.container');
const sizeEl = document.querySelector('.size');
let size = sizeEl.value;
const limparBtn = document.querySelector('.btn');
let draw = false;

// add only one selection for each color class item in #color-pallete
colorSelected.addEventListener('click', (choice) => {
  const chosen = document.getElementsByClassName('selected')[0];
  chosen.classList.remove('selected');
  choice.target.classList.add('selected');
});

// add responsive table - input divs
// eslint-disable-next-line max-lines-per-function
function square(size) {
  container.style.setProperty('--size', size); // add set size * size
  for (let i = 0; i < size * size; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    container.appendChild(div);

    // events that make possible apply the color selected to the pixels
    // eslint-disable-next-line no-loop-func
    div.addEventListener('click', () => {
      const selected = document.querySelector('.selected').style.backgroundColor;
      console.log(selected);
      if (!draw) return;
      div.style.backgroundColor = selected;
    });
    div.addEventListener('mouseover', () => {
      const selected = document.querySelector('.selected').style.backgroundColor;
      if (!draw) return;
      div.style.backgroundColor = selected;
    });
    div.addEventListener('mousedown', () => {
      const selected = document.querySelector('.selected').style.backgroundColor;
      div.style.backgroundColor = selected;
    });
  }
}

window.addEventListener('mousedown', () => {
  draw = true;
});

window.addEventListener('mouseup', () => {
  draw = false;
});

// cleans the board
function limpar() {
  container.innerHTML = '';
  square(size);
}

limparBtn.addEventListener('click', limpar);

sizeEl.addEventListener('keyup', () => {
  size = sizeEl.value;
  limpar();
});
square(size);

/* [1] Sometimes I asked my brother José Lisboa to review something and help me to find a solution, especially in color selection;
   [2] Most of this projec was based on this video: https://www.youtube.com/watch?v=wZZyhrJxZRU; */
