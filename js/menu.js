(() => {
    const refs = {
      openMenuBtn: document.querySelector('.mobile-menu-btn'),
      closeMenuBtn: document.querySelector('.mobile-menu__close-btn'),
      menu: document.querySelector('.mobile-menu'),
      body: document.querySelector('#body'),
    };
  
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle('is-open');
    }
  })();

 





















  