const infoButton = document.getElementById('info-button');
const infoExit = document.getElementById('info-exit');
const infoBox = document.querySelector('.information-box');
const modalOverlay = document.querySelector('.modal-overlay');

function toggleInfobox() {
    document.body.classList.toggle('modal-active');
}
infoButton.addEventListener('click', toggleInfobox);
infoExit.addEventListener('click', toggleInfobox);
modalOverlay.addEventListener('click', toggleInfobox);

infoBox.addEventListener('click', function(event) {
    event.stopPropagation();
});