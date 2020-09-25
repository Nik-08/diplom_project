const toTop = () => { 
  const toTop1 = document.querySelector('#totop'),
  headSlider = document.querySelector('.head-slider');
  const bottom = headSlider.getBoundingClientRect().bottom;
  toTop1.style.display = 'none';
  window.addEventListener('scroll', () => { 
    const height = pageYOffset;    
      if (bottom < height) {
        toTop1.style.display = 'block';
      } else {
        toTop1.style.display = 'none';
      }
  });
};
export default toTop;