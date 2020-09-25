const toTop = () => { 
  const toTop1 = document.querySelector('#totop'),
  headerMain = document.querySelector('.header-main'),
  headerSlider = headerMain.querySelector('.header-slider');

  const top = headerMain.getBoundingClientRect().bottom;
  toTop1.style.display = 'none';
  window.addEventListener('scroll', () => {
    let height = document.documentElement.clientHeight;  
    height = pageYOffset;
      if (top > height) {
        toTop1.style.display = 'none';
      } else {
        toTop1.style.display = 'block';
      }
  });
};
export default toTop;