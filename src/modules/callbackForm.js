const callbackForm = () => {
  const  headerMain = document.querySelector('.header-main'),
  callbackForm = document.querySelector('#callback_form');

  headerMain.addEventListener('click', (event) => {
    let target = event.target;
     if(target.closest('.callback-btn')){
      callbackForm.style.display = 'block';
     }
  });
  callbackForm.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.classList.contains('close_icon')){
      callbackForm.style.display = 'none';
    }else{
      target = target.closest('.form-content');
    }
      if(!target){
        callbackForm.style.display = 'none';
      }
  });
};
export default callbackForm;