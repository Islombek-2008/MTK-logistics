// partions

let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");


// part1 right push

let part1right = document.getElementById("part1-right");

part1right.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "block";
  part3.style.display = "none";
});

// part2 left right push

let part2left = document.getElementById("part2-left");
let part2right = document.getElementById("part2-right");

part2right.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "none";
  part3.style.display = "block";
});

part2left.addEventListener("click", function () {
  part1.style.display = "block";
  part2.style.display = "none";
  part3.style.display = "none";
});

// part3 left push

let part3left = document.getElementById("part3-left");

part3left.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "block";
  part3.style.display = "none";
});