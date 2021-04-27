// Your code goes here
document.addEventListener("DOMContentLoaded", function() {

  console.log("The DOM has loaded");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

function var1() {
  document.getElementById('text').innerHTML = 'This is really cool!';
}

//window.onload = var1;
