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

  document.body.addEventListener('click', (event) => {
    let target = event.target,
      scrollLink = target.closest('.scroll'),
      toTop = target.closest('#totop');

    if (scrollLink) {
      event.preventDefault();
      let selector = target.href.split('#');
      window.scroll({
        left: 0,
        top: document.querySelector(`#${selector[1]}`).offsetTop,
        behavior: 'smooth'
      });
    }

    if (toTop) {
      event.preventDefault();
      window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth'
      });
    }
  });

};
export default toTop;