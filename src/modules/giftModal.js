const giftModal = () => {
  const  body = document.querySelector('body'),
  gift = document.querySelector('#gift');
  // fixedGift = document.querySelector('.fixed-gift'),
  // img =   

  body.addEventListener('click', (event) => {
    let target = event.target;
     if(target.closest('.fixed-gift')){
      gift.style.display = 'block';
      target.closest('img').style.display = 'none';
     }
  });
  gift.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.classList.contains('close_icon') || target.classList.contains('close-btn')){
      gift.style.display = 'none';
    }else{
      target = target.closest('.form-content');
    }
      if(!target){
        gift.style.display = 'none';
      }
  });
};
export default giftModal;