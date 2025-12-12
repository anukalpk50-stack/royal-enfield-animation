var elem = document.querySelectorAll('.elem')
var buttonAll = document.querySelectorAll('button')
// elem.forEach(function(elem){
// elem.childNodes[3].addEventListener('click',function(){
//     console.log("object");
// })
// })

buttonAll.forEach(function(elem){
    elem.addEventListener('click',function(){
       if(elem.innerHTML == 'Add Friend'){
        elem.innerHTML = 'Remove Friend'
       }else{
         elem.innerHTML = 'Add Friend'
       }
    })
})