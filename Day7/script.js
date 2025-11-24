// console.log("object");
// setTimeout(function() {
//     console.log("hello gys");
// }, 3000)
// console.log("object");
// setTimeout(function() {
//     console.log("hello 1");
// }, 3000)
// setTimeout(function() {
//     console.log("hello 2");
// }, 4000)
// setTimeout(function() {
//     console.log("hello 3");
// }, 5000)
// setTimeout(function() {
//     console.log("hello 4");
// }, 6000)
// var user = 'anukalp'
// var btn = document.querySelector("button");
// var h1 = document.querySelector("h1");
// btn.addEventListener("click", function() {
//     h1.innerText = "Loading...";
//     setTimeout(function() {
//         h1.innerText = `Hello, ${user}!`;
//     }, 5501)
// });

// setInterval(function() {
//     console.log("object");
// }, 100000)
// var a = 0;
// setInterval(function() {
//     a++;
//     console.log(a);
// }, 1000)
//setTimeout :- delays the execution of a function by a specified time
//setInterval :- repeatedly executes a function at specified intervals of time
// var a = 0;
// var int = setInterval(function() {
//     a++;
//     console.log(a);
// }, 100)
// setTimeout(function() {

//     clearInterval(int)
// }, 1000)
var num = 50 + Math.floor(Math.random() * 100);
var btn = document.querySelector("button");
var grow = 0;
var h2 = document.querySelector('h2')
var inner = document.querySelector(".inner ");
btn.addEventListener("click", function() {
    var int = setInterval(function() {
            grow++;
            h2.innerHTML = grow + '%';
            btn.innerHTML = "Downloading..."
            btn.style.pointerEvents = "none";
            inner.style.width = grow + '%';
        },
        num);
    setTimeout(function() {
        clearInterval(int)
        btn.innerHTML = "Downloaded";
        btn.style.color = "red";
        btn.style.opacity = "0.6";
        console.log('downloade in ' + num / 10 + 'seconds');
    }, num * 100)
});