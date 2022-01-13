function navbarWizard(classButton, classMenu) {
    let navNodeList = document.querySelectorAll(classButton);

    for (let i = 0; i < navNodeList.length; i++) {
    let btnDropDown = document.querySelectorAll(classButton)[i];
    let menuContent = document.querySelectorAll(classMenu)[i];
    let openNavBar = function () {
        menuContent.style.display === ''
        ? (menuContent.style.display = 'block')
        : (menuContent.style.display = '');
    };
    btnDropDown.addEventListener('click', openNavBar);
    };
};

module.exports.navbarWizard = navbarWizard;