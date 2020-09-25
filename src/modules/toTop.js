const toTop = () => { 
  const toTop = document.querySelector('#totop');
  console.log(toTop);

  const top = topMenu.getBoundingClientRect().top;
    
  window.addEventListener('scroll', () => {
    let height = document.documentElement.clientHeight;  
    height = pageYOffset;
      if (top < height) {
        
      } else {
        
      }
  });
};