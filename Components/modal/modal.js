const btnModalDemo = document.querySelector('.btn-modal-demo');

btnModalDemo.addEventListener('click', openModalDemo);

const modalCloseButtons = document.querySelectorAll('.btn-modal-close');
modalCloseButtons.forEach(modalCloseButton => modalCloseButton.addEventListener('click', closeModal));

function openModalDemo(e) {
    const demoModal = document.querySelector('.modal-demo-container');
    demoModal.classList.add('active-modal');
    document.querySelector('body').style.overflow = 'hidden';
}

function closeModal(e) {
    const modalContainer = e.target.parentElement.parentElement;
    modalContainer.classList.remove('active-modal');
    document.querySelector('body').style.overflow = 'auto';
}