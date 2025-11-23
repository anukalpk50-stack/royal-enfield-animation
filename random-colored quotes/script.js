// var btn = document.querySelector("button");
// var main = document.querySelector("main");

// btn.addEventListener("click", function() {
//     var div = document.createElement('div');
//     var x = Math.random() * 80;
//     var y = Math.random() * 80;
//     var r = Math.floor(Math.random() * 360);

//     function getRandomColor() {


//         var r = Math.floor(Math.random() * 256);
//         var g = Math.floor(Math.random() * 256);
//         var b = Math.floor(Math.random() * 256);
//         return `rgb(${r}, ${g}, ${b})`;
//     }
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.display = "flex"
//     div.style.justifyContent = "center";
//     div.style.alignItems = "center";
//     div.style.border = "2px solid black";
//     div.style.position = "absolute";
//     div.style.top = `${x}%`;
//     div.style.right = `${y}%`;
//     div.style.transform = `rotate(${r}deg)`;
//     div.style.backgroundColor = getRandomColor();;
//     main.appendChild(div);
//     console.log('x=' + x);
//     console.log('y=' + y);
//     console.log('r=' + r);
// });
// console.log("object");
let arr = ["ram  is god", "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The mind is everything. What you think you become. - Buddha",
    "Go confidently in the direction of your dreams! Live the life you've imagined. - Henry David Thoreau",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The journey of a thousand miles begins with a single step. - Lao Tzu",
    "Action is the foundational key to all success. - Pablo Picasso",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
    "Our greatest weakness lies in giving up. - Thomas A. Edison",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "You must do the things you think you cannot do. - Eleanor Roosevelt",
    "Fall seven times, stand up eight. - Japanese Proverb",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "We can not always build the future for our youth, but we can build our youth for the future. - Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. - Joshua J. Marine",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Happiness is not something readymade. It comes from your own actions. - Dalai Lama",
    "Peace begins with a smile. - Mother Teresa",
    "Where there is love there is life. - Mahatma Gandhi",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "The secret of getting ahead is getting started. - Mark Twain",
    "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "An unexamined life is not worth living. - Socrates",
    "The true sign of intelligence is not knowledge but imagination. - Albert Einstein",
    "Everything you can imagine is real. - Pablo Picasso",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Logic will get you from A to Z; imagination will get you everywhere. - Albert Einstein",
    "The artist is a collector. Not of things, but of moments. - Unknown",
    "Kindness is a language which the deaf can hear and the blind can see. - Mark Twain",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "A friend is one who knows you and loves you just the same. - Elbert Hubbard",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. - Martin Luther King Jr.",
    "We must accept finite disappointment, but never lose infinite hope. - Martin Luther King Jr.",
    "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present. - Master Oogway",
    "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi",
    "Time is money. - Benjamin Franklin",
    "Change the way you look at things and the things you look at change. - Wayne Dyer",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
    "It is never too late to be what you might have been. - George Eliot",
    "The secret to living is giving. - Tony Robbins",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Look deep into nature, and then you will understand everything better. - Albert Einstein"
];
var btn = document.querySelector("button");
var main = document.querySelector("main");
btn.addEventListener("click", function() {

    var p = document.createElement('p');
    var f = Math.floor(Math.random() * 50);
    var x = Math.floor(Math.random() * 60);
    var y = Math.floor(Math.random() * 60);
    var r = Math.floor(Math.random() * 360);
    var a = Math.floor(Math.random() * arr.length);

    function getRandomColor() {
        var c1 = Math.floor(Math.random() * 256);
        var c2 = Math.floor(Math.random() * 256);
        var c3 = Math.floor(Math.random() * 256);
        return `rgb(${c1}, ${c2}, ${c3})`;
    }
    console.log(a);
    p.innerHTML = arr[a];
    p.style.position = "absolute";
    p.style.top = `${x}%`;
    p.style.left = `${y}%`;
    p.style.transform = `rotate(${r}deg)`;
    p.style.fontSize = `${f}px`;
    p.style.color = getRandomColor();
    main.appendChild(p);
    console.log('x=' + x);
    console.log('y=' + y);
    console.log('r=' + r);
});