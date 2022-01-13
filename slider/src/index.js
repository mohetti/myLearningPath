let imgDisplay = document.querySelector('.img');
let imgTrans = document.querySelector('#img');
let slider = document.querySelectorAll('.slider');
let img = document.querySelector('#img');
let dot = document.querySelectorAll('.dot');
dot[0].style.color = 'blue';

let slideShow = [
  'https://artfiles.alphacoders.com/895/89538.jpg',
  'https://i.pinimg.com/originals/21/1d/90/211d90702ce3de177ccc0f6484cddaad.jpg',
  'https://frpnet.net/wp-content/uploads/2020/07/amon-sul.jpg',
];

let grayDots = function grayDots() {
  dot.forEach((dot) => (dot.style.color = 'lightgray'));
};

let slideCalc = function slideCalc(index, id) {
  grayDots();
  if (id === 'arrow-left') {
    if (index === -1) {
      img.src = slideShow[2];
      dot[2].style.color = 'blue';
    } else {
      img.src = slideShow[index];
      dot[index].style.color = 'blue';
    }
  } else if (id === 'arrow-right') {
    if (index === 3) {
      img.src = slideShow[0];
      dot[0].style.color = 'blue';
    } else {
      img.src = slideShow[index];
      dot[index].style.color = 'blue';
    }
  }
};

let slideImg = function slidImg(event) {
  slider.forEach((arrow) => arrow.removeEventListener('click', slideImg));
  let findIndex = slideShow.findIndex((x) => x === img.src);
  imgTrans.classList.add('transitionB');
  setTimeout(function () {
    imgTrans.classList.remove('transitionB');
    if (event.target.id === 'arrow-left') {
      slideCalc(findIndex - 1, event.target.id);
    } else if (event.target.id === 'arrow-right') {
      slideCalc(findIndex + 1, event.target.id);
    }
    imgTrans.classList.add('transition');
  }, 1000);

  setTimeout(function () {
    imgTrans.classList.remove('transition');
    slider.forEach((arrow) => arrow.addEventListener('click', slideImg));
  }, 2000);
};

slider.forEach((arrow) => arrow.addEventListener('click', slideImg));
