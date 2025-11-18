// let c1 = Math.random() * 266;
// let c2 = Math.random() * 266;
// let c3 = Math.random() * 266;
// let cb1 = Math.random() * 266;
// let cb2 = Math.random() * 266;
// let cb3 = Math.random() * 266;
// let ct1 = Math.random() * 266;
// let ct2 = Math.random() * 266;
// let ct3 = Math.random() * 266;

// const box = document.querySelector('.box');
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
//     c1 = Math.floor(Math.random() * 266);
//     c2 = Math.floor(Math.random() * 266);
//     c3 = Math.floor(Math.random() * 266);
//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//     console.log(`box: rgb(${c1},${c2},${c3})`);
// })
// button.addEventListener('click', () => {
//     cb1 = Math.floor(Math.random() * 266);
//     cb2 = Math.floor(Math.random() * 266);
//     cb3 = Math.floor(Math.random() * 266);
//     button.style.backgroundColor = `rgb(${cb1},${cb2},${cb3})`;
//     console.log(`button: rgb(${cb1},${cb2},${cb3})`);
// })
// button.addEventListener('click', () => {
//     ct1 = Math.floor(Math.random() * 266);
//     ct2 = Math.floor(Math.random() * 266);
//     ct3 = Math.floor(Math.random() * 266);
//     h1.style.color = `rgb(${ct1},${ct2},${ct3})`;
//     console.log(`text: rgb(${ct1},${ct2},${ct3})`);
// })
const box = document.querySelector('.box');
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// Helper function to generate a random rgb() color string
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

button.addEventListener('click', () => {
    // Apply a new random color to each element
    box.style.backgroundColor = getRandomColor();
    button.style.backgroundColor = getRandomColor();
    h1.style.color = getRandomColor();
});