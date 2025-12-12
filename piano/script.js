const pianoKeys = document.querySelectorAll(".piano-keys .key");
const h1 = document.querySelector('header h1');
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
    // console.log(getRandomColor);
};
const playTune = (key) => {
    // Assuming your audio files are in a 'tunes' folder and are in .wav format.
    // If they are in a 'music' folder or are .mp3, change the path accordingly.
    // e.g., new Audio(`music/${key}.mp3`);
    const audio = new Audio(`music/${key}.mp3`);
    audio.play();
     console.log(getRandomColor());
     h1.style.color = getRandomColor();
    // Add active class for visual feedback
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.add("active");
        // Remove active class after a short delay
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

// Add click event listeners to each key
pianoKeys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
});

// Add a single keyboard event listener to the document
document.addEventListener("keydown", (e) => {
    // Create a list of allowed keys from your HTML data-key attributes
    const allowedKeys = Array.from(pianoKeys).map(key => key.dataset.key);

    if (allowedKeys.includes(e.key)) {
        playTune(e.key);
    }
});
h1.addEventListener("click", () => {
    h1.style.color = getRandomColor();
})