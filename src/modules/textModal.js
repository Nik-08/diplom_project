const textModal = () => {
  const  headerMain = document.querySelector('.header-main'),
  popup = document.getElementById('free_visit_form');   
  headerMain.addEventListener('click', (event) => {
    let target = event.target;
     if(target.closest('.open-popup')){
      popup.style.display = 'block';
     }
  });
  popup.addEventListener('click', (event) =>{
    let target = event.target;
    if(target.classList.contains('close_icon')){
      popup.style.display = 'none';
    }else{
      target = target.closest('.form-content');
    }
      if(!target){
        popup.style.display = 'none';
      }
  });
};
export default textModal;