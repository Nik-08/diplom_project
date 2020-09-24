const burgerMenu = () => {
  const menuButton = document.querySelector('.menu-button'),
  topMenu = document.querySelector('.top-menu'),
  img = menuButton.querySelector('img'),
  popup = document.querySelector('.popup-menu');
  
  let top = topMenu.getBoundingClientRect().bottom;
   
  window.addEventListener('scroll', () => {
    let height = document.documentElement.clientHeight;  
    let width = document.documentElement.clientWidth;
    height = pageYOffset;
      if (width < 768 && top < height) {
        topMenu.style.position = 'fixed';
      } else {
        topMenu.style.position = '';
      }
  });

  img.addEventListener('click', (event) => {
    let target = event.target;
    if(target.closest('img')){
    popup.style.display = 'flex';
    }
  });   
  popup.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.closest('img') ||  target.closest('a')){
      popup.style.display = 'none';
    }
  });
};
export default burgerMenu;