// // var box = document.querySelector('#box')
// var img = document.getElementById('chutki')
// var message = document.querySelector('h2 span')
// var body = document.querySelector('body')
// img.addEventListener('dblclick', function(){
//     console.log("double clicked");
// })
// img.addEventListener('click', function(){
//     console.log("single clicked");
// })
// img.addEventListener('mouseenter', function(){
//     message.innerHTML = 'chutki se dur ho jaa 🤬🤬😡'
//     body.style.backgroundColor = 'red';
// })
// img.addEventListener('mouseleave', function(){
//     message.innerHTML = 'Good! ab door hi rahna😎😎😋'
//     body.style.backgroundColor = 'black';
// })
// var main = document.querySelector('#main');
// main.addEventListener('click',function(){
//     console.log("object");
// })
// main.addEventListener('mouseenter',function(){
//     console.log("enter");
// })
// main.addEventListener('wheel',function(val){
//     console.log(val.x);
//     console.log(val.y);
// })
// var main = document.querySelector('#main');
// var cursor = document.querySelector('#cursor');

// main.addEventListener('mousemove',function(dets){
//     cursor.style.left = dets.x + 'px'
//     cursor.style.top = dets.y + 'px'
// })
var h1 = document.querySelector('h1')
document.body.addEventListener('keydown',function(dets){
    console.log(dets.code);
    h1.innerHTML = dets.code
})