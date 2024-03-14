function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  var typed = new Typed('#element', {
    strings: ['Java Developer','Web Designer','Web Developer'],
    typeSpeed: 150,
    backspeed: 150,
    loop:true
  });