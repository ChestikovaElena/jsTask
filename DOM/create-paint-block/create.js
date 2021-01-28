const countSelector = document.querySelector('.count-selector');
const colorSelector = document.querySelector('.color-selector');
const blockWrapper = document.querySelector('.blocks');

const createMarkup = count => {
  let markup = "";

  for (let i = 0; i < count; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.innerHTML = i + 1;

    markup += block.outerHTML;
  }

  return markup;
}

countSelector.addEventListener('change', e => {
  const count = e.target.value;
  const markup = createMarkup(count);
  blockWrapper.innerHTML = markup;
})

const colorTheBlock = (block, color) => {
  block.style.backgroundColor = color;
}

const setColor = (block, color) => {
  const colorInt = +color.substring(1, 2);
  const colorToFont = colorInt <= 8 ? '#ffffff' : '#000000';

  block.style.color = colorToFont;
}

let changed = false;

colorSelector.addEventListener('change', e => {
  const color = e.target.value;
  const blocks = blockWrapper.querySelectorAll(".block");

  if (blockWrapper.children.length == 0) {
      alert('Нет блоков для окрашивания');
    } else {
      changed = !changed;

      for (let i = 0; i < blocks.length; i++) {
        const currentBlock = blocks[i];
        const blockNumber = i + 1;
        let colorToApply = "";

        if (changed) {
          colorToApply = blockNumber % 2 != 0 ? color : "#fff";
        } else {
          colorToApply = blockNumber % 2 == 0 ? color : "#fff";
        }

        colorTheBlock(currentBlock, colorToApply);
        setColor(currentBlock, colorToApply);
      }
    }
  })