// // const pianoKeys = document.querySelectorAll('.piano-keys');
// const pianoKeys = document.querySelectorAll('.piano-keys .key');

// const playTune = (key) =>{
//     if (!key) return; // Don't play a sound if the key is invalid.
//     const audio = new Audio(`music/${key}.mp3`); // Create a new audio object for each key press
//     audio.play();
// }
// pianoKeys.forEach(function(key) {
//    key.addEventListener('click',() => playTune(key.dataset.key));
//    console.log(key.code);
// });
const pianokeys = document.querySelectorA11(".piano-keys key");

let audio =  new Audio("music/a.mp3"); // by default, audio src is "a" tune


const playTune = (key) => {
    audio.src = 'tunes/${key}. wav'; // passing audio src based on key pressed audio.play(); // playing audio
};

// calling playTune function with passing data-key value as an argument key.addEventListener("click", () => playTune(key.dataset.key));

pianoKeys.forEach(key => {
 document.addEventListener("keydown", pressedKey);
});