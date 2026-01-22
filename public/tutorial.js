const tutorialButton = document.getElementById('help-button');
const tutorialExit = document.getElementById('tut-button');
const tutorialBox = document.querySelector('.tutorial-box');
const modalOverlayTwo = document.querySelector('.modal-overlay-two');

function toggleTutorialBox() {
    document.body.classList.toggle('modal-active-two');
}
tutorialButton.addEventListener('click', toggleTutorialBox);
tutorialExit.addEventListener('click', toggleTutorialBox);
modalOverlayTwo.addEventListener('click', toggleTutorialBox);

tutorialBox.addEventListener('click', function(event) {
    event.stopPropagation();
 });