const hamburger = document.querySelector('.hamburger');
const sidebarClose = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');
;
sidebarClose.addEventListener('click', toggleSidebar);hamburger.addEventListener('click', toggleSidebar);


function toggleSidebar(e) {    
    sidebar.classList.toggle('sidebar--open');
}


