// partions

let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");

// part-1 push

let part1push2 = document.getElementById("part2-push");
let part1push3 = document.getElementById("part3-push");

part1push2.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "block";
  part3.style.display = "none";
});

part1push3.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "none";
  part3.style.display = "block";
});

//part-2 push

let part2push1 = document.getElementById("part2-push1");
let part2push3 = document.getElementById("part2-push3");

part2push1.addEventListener("click", function () {
  part1.style.display = "block";
  part2.style.display = "none";
  part3.style.display = "none";
});

part2push3.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "none";
  part3.style.display = "block";
});

//part-3 push

let part3push1 = document.getElementById("part3-push1");
let part3push2 = document.getElementById("part3-push2");

part3push1.addEventListener("click", function () {
  part1.style.display = "block";
  part2.style.display = "none";
  part3.style.display = "none";
});

part3push2.addEventListener("click", function () {
  part1.style.display = "none";
  part2.style.display = "block";
  part3.style.display = "none";
});

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