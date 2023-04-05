const tabButton = document.querySelectorAll('.subject-heading');
const rootDiv = document.querySelector('.root');
const conventional = document.querySelector('.conventional');
const others = document.querySelector('.others');
const underBlob = document.querySelector('.underblob');
console.log(underBlob);


// const switchList = () => {
//   if (tabButton[0].onclick) {
//     rootDiv.style.display = 'none'
//   } 
// }

// switchList();

tabButton[0].addEventListener('click', e => {
  rootDiv.style.display = 'block';
  conventional.style.display = 'none';
  others.style.display = 'none';
  underBlob.style.left = '5%';
})

tabButton[1].addEventListener('click', e => {
  rootDiv.style.display = 'none';
  conventional.style.display = 'block';
  others.style.display = 'none';
  underBlob.style.left = '35%';
})

tabButton[2].addEventListener('click', e => {
  rootDiv.style.display = 'none';
  conventional.style.display = 'none';
  others.style.display = 'block';
  underBlob.style.left = '65%';
})