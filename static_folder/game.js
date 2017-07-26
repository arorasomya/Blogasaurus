function randomNum() {
  var ans = Math.floor((Math.random() * 10) +1);
}

function setup() {
  $("#ok_button1").click(greeting);
}

function greeting() {
  var userName = $('#username').val();
  alert("Hi " + userName + ",\n You is kind\n You is smart\n You is strong \nGood Luck in this game!");
  var header = $('h1');
  header.text("Welcome to my Number Guessing Game" + userName);
}


$(document).ready(setup);
