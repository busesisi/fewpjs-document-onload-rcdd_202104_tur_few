// Your code goes here
document.addEventListener("DOMContentLoaded", function var1() {
document.getElementById('text').innerHTML = 'This is really cool!';
  console.log("his is really cool!");
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);

/*function var1() {
  document.getElementById('text').innerHTML = 'This is really cool!';
}

//window.onload = var1;
