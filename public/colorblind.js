document.getElementById('colorblindToggle').addEventListener('click', function() {
    // Wrong red divs
    // var wrongDivs = document.querySelectorAll('.wrong-up, .wrong-down, .wrong-guess');
    // wrongDivs.forEach(function(div) {
    //     var currentColor = window.getComputedStyle(div).backgroundColor;
    //     if (currentColor === 'rgb(240, 0, 0)') {
    //         div.style.backgroundColor = '#5a69f5'; // Colorblind
    //     } else {
    //         div.style.backgroundColor = '#f00000'; // Default
    //     }
    // });

    // correct green divs
    var correctDivs = document.querySelectorAll('.correct-guess');
    correctDivs.forEach(function(div) {
        var currentColor = window.getComputedStyle(div).backgroundColor;
        if (currentColor === 'rgb(0, 240, 32)') {
            div.style.backgroundColor = '#818cf0'; // colorblind
        } else {
            div.style.backgroundColor = '#00f020'; // Default 
        }
    });

});
