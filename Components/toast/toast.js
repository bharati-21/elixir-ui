const snackbars = document.querySelectorAll('.snackbar');
const btnToastDemo = document.querySelector('.btn__toast__demo');
let snackbarClose = document.querySelectorAll('.btn-snackbar-close');

btnToastDemo.addEventListener('click', showToast);
attachEventListener();

function showToast(e) {
    e.preventDefault();
    snackbars.forEach(snackbar => snackbar.style.display = 'flex');
    
    snackbarClose = document.querySelectorAll('.btn-snackbar-close');
    attachEventListener();

    // To remove snackbar demo after 5 seconds
    setTimeout(() => {
        document.querySelector('.snackbar__demo').style.display = 'none';
    }, 5000)
}

function attachEventListener() {
    snackbarClose.forEach(closeBtn => closeBtn.addEventListener('click', closeSnackbar));
}

// Function to close snackbar
function closeSnackbar(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.style.display = 'none';
}