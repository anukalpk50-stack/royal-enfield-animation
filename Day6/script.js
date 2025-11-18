let bulb = document.querySelector('#bulb');
let btn = document.querySelector('button');
let flag = 0;
btn.addEventListener('click', function() {
    if (flag == 0) {
        bulb.style.backgroundColor = 'yellow';
        flag = 1;
        console.log("bulb on");
    } else {
        bulb.style.backgroundColor = 'white';
        flag = 0;
        console.log("bulb off");
    }
})