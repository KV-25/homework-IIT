'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('black-theme');
    document.body.classList.toggle('red-theme');

    const className = document.body.className;
    if(className == "black-theme") {
        this.textContent = "BR";
    } else {
        this.textContent = "Drive";
    }

    console.log('current class name: ' + className);
});