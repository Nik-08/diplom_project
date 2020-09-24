const dropMenu = () => {
  const clubsList = document.querySelector('.clubs-list'),
  headerMain = document.querySelector('.header-main'),
  list = clubsList.querySelector('ul');
  list.style.display = 'none';
  headerMain.addEventListener('click', (event) => {
  let target = event.target;
   if(target.closest('.clubs-list') && list.style.display === 'none'){
    list.style.display = 'block';
    return;
   }else{
     target = target.closest('.clubs-list');
     list.style.display = 'none';
   }
    if(!target){
    list.style.display = 'none';
   }    
  });
};
export default dropMenu;