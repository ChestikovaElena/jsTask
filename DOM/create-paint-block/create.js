const countSelector = document.querySelector('.count-selector');
const colorSelector = document.querySelector('.color-selector');
const blockWrapper = document.querySelector('.blocks');

// переменная, равная индексу блока, начиная с которого будем красить
// будем менять ее значение каждый раз при входе в функцию paintBlocks()
// поэтому начальное значение 1
// 0 - окрашиваем нечетные блоки
// 1 - окрашиваем четные блоки
var isBeginPaintingWith = 1; 

countSelector.addEventListener('change', function(e) {
  e.preventDefault();
  createBlocks();
})

colorSelector.addEventListener('change', function(e) {
  e.preventDefault();
  if (blockWrapper.children.length == 0) {
    alert('Нет блоков для окрашивания');
  } else {
    paintBlocks();
  }
})

function createBlocks() {
  let countOfBlocks = blockWrapper.children.length;
  if ((countOfBlocks < countSelector.value) || countSelector.value == 0) {
    for (let i = countOfBlocks; i < countSelector.value; i++) {
      createOneBlock(i);
    }
  }
  if (countOfBlocks > countSelector.value) {
    for (let i = countOfBlocks; i > countSelector.value; i--) {
      deleteOneBlock(i);
    }
  }
}

function createOneBlock(index) {
  let item = document.createElement('div');
  item.innerHTML = index + 1;
  item.style.fontSize = "18px";
  item.style.color = 'black';
  item.style.textAlign = 'center';
  item.style.lineHeight = '50px';
  item.style.width = '50px';
  item.style.height = '50px';
  item.style.border = '1px solid #000';
  item.style.marginRight = '10px';
  item.style.marginBottom = '10px';
  blockWrapper.appendChild(item);
}

function deleteOneBlock(index) {
  const d_item = blockWrapper.children[index-1];
  if (d_item != undefined) {
    blockWrapper.removeChild(d_item);
  }
}

function paintBlocks() {
  let countOfBlocks = blockWrapper.children.length;

  for (var i = isBeginPaintingWith; i < countOfBlocks; i+= 2) {
    discountColor(i);
  }

  if (isBeginPaintingWith == 0) {
    isBeginPaintingWith = 1;
  } else {
    isBeginPaintingWith = 0;
  }

  for (var i = isBeginPaintingWith; i < countOfBlocks; i+= 2) {
    paintOneBlock(i);
  }
}

function discountColor(index) {
  const p_item = blockWrapper.children[index];
   p_item.style.backgroundColor = "transparent";
   p_item.style.color = '#000000';
}

function paintOneBlock(index) {
  const p_item = blockWrapper.children[index];
  p_item.style.backgroundColor = colorSelector.value;

  setContrastColor(p_item);
  // if (colorSelector.value == 'black') {
  //   p_item.style.color = '#ffffff';
  // }
}

function setContrastColor(item) {
  const color = +colorSelector.value.substring(1, 2);
  if (color <= 8) {
    item.style.color = '#ffffff';
  } else {
    item.style.color = '#000000';
  }
}