const closeIcons = document.querySelectorAll('.alert .icon-close');
closeIcons.forEach(closeIcon => closeIcon.addEventListener('click', closeAlert));


function closeAlert(e) {
    const btnClose = e.target;
    const alert = btnClose.parentElement;
    alert.style.display = 'none';
}