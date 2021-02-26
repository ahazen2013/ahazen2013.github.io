'use strict'

const switcher = document.querySelector('#theme');

switcher.addEventListener('click', function() {
  document.body.classList.toggle('light-theme')

  var className = document.body.className;

  if(className == "dark-theme") {
    this.textContent = "Light Theme";
  }

  else {
    this.textContent = "Dark Theme";
  }

  console.log('current class name: ' + className);

});