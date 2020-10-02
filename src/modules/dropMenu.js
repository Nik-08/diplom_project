const dropMenu = () => {
  const clubsList = document.querySelector('.clubs-list'),
    headerMain = document.querySelector('.header-main'),
    list = clubsList.querySelector('ul'),
    a = list.querySelectorAll('a');
  list.style.display = 'none';
  list.classList.add('clubs-ul')
  headerMain.addEventListener('click', (event) => {
    let target = event.target;
    if (target.closest('.clubs-list') && list.style.display === 'none') {
      list.style.display = 'block';

    } else if (!target.closest('.clubs-ul')) {
      list.style.display = 'none';
    }
  });
};
export default dropMenu;