const root = document.getElementsByClassName('root')[0];
// console.log(root);
const rootWidth = root.getBoundingClientRect().width;
// console.log(rootWidth);
const button = document.getElementById('applybutton')

const setbuttonWidth = (button) => {
  button.style.width = rootWidth + 'px';
};

setbuttonWidth(button);