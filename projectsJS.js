'use strict'

//const switcher = document.querySelector('#theme');

//switcher.addEventListener('click', function() {
  //document.body.classList.toggle('light-theme')

  //var className = document.body.className;

  //if(className == "dark-theme") {
    //this.textContent = "Light Theme";
  //}

  //else {
    //this.textContent = "Dark Theme";
  //}

  //console.log('current class name: ' + className);

//});

//setUp("rc", "Assets/Rock Climbing.jpg");
//setUp("br", "Assets/Ballroom.jpg");
//setUp("mr", "Assets/Mud Run.jpg");
//setUp("cos", "Assets/Cosplay.jpg");
//setUp("er", "Assets/Escape Room.jpg");


function setUp(id, file) {
  document.getElementById(id).onmouseover = function() {mouseOver(file)};
  //document.getElementById(id).onmouseout = function() {mouseOut()};
}

function mouseOver(x) {
  document.getElementById("profile").src = x;
}

//function mouseOut() {
  //document.getElementById("profile").src = "Assets/Me.jpg";