const container = document.querySelector('.containerg');
var slider = document.querySelector('#sizeRange');
const colorButtons = document.querySelectorAll('.color-choice');
const clearButton = document.querySelector('.clear');
var color = 'black';
createGrid(16);
function createGrid(gridCount) {
  let gridArea = gridCount * gridCount;
  for (let i = 0; i < gridArea; i++) {
    let createDiv = document.createElement('div');

    container.style.gridTemplateColumns = `repeat(${gridCount}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridCount}, 1fr)`;
    container.insertAdjacentElement('beforeend', createDiv);
  }

  var SelectGrid = container.querySelectorAll('div');
  SelectGrid.forEach((grid) => grid.addEventListener('mouseover', colorGrid));
}

function colorGrid() {
  switch (color) {
    case 'rainbow':
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      break;
    case 'eraser':
      this.style.backgroundColor = '#ffffff';
      break;
    case 'black':
      this.style.backgroundColor = '#000000';
      break;
    default:
      this.style.backgroundColor = color;
      break;
  }
}

function pixelSize() {
  let gridN = container.querySelectorAll('div');
  gridN.forEach((gridN) => gridN.remove());
  createGrid(slider.value);
}

function eraseAllColor() {
  var gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(
    (gridPixel) => (gridPixel.style.backgroundColor = '#ffffff')
  );
}

function changeColor(event) {
  switch (event.target.dataset.color) {
    case 'rainbow':
      color = 'rainbow';
      break;
    case 'eraser':
      color = 'eraser';
      break;
    default:
      color = 'black';
      break;
  }
}

colorButtons.forEach((colorButton) =>
  colorButton.addEventListener('click', changeColor)
);
slider.addEventListener('mouseup', pixelSize);

clearButton.addEventListener('click', eraseAllColor);
