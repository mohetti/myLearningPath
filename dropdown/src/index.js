let navNodeList = document.querySelectorAll('.nav');

for (let i = 0; i < navNodeList.length; i++) {
  let btnDropDown = document.querySelectorAll('.nav')[i];
  let menuContent = document.querySelectorAll('.menu-content')[i];
  let openNavBar = function () {
    menuContent.style.display === ''
      ? (menuContent.style.display = 'block')
      : (menuContent.style.display = '');
  };
  btnDropDown.addEventListener('click', openNavBar);
}
