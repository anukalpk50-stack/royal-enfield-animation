// var arr = ['anukalp', 'kumar', 'singh', 'hello', 'world', 'javascript', 'python', 'java', 'ruby', 'html', 'css', 'php', 'c', 'c++', 'swift', 'go', 'rust', 'typescript', 'kotlin', 'scala'];
// var a = Math.floor(Math.random() * arr.length);
// console.log(arr[a]);
//todo 
/*
team: csk;
primary color: yellow;
secondary color: blue;
fullName: Chennai Super Kings;
trophyCount: 4;
captain: MS Dhoni;

*/
var arr = [{
        team: 'CSK',
        captain: 'MS Dhoni',
        primary: "yellow",
        secondary: "blue",
        players: ['Ruturaj Gaikwad', 'Devon Conway', 'Moeen Ali', 'Deepak Chahar', 'Ravindra Jadeja']
    },
    {
        team: 'MI',

        captain: 'Rohit Sharma',
        primary: "blue",
        secondary: "gold",
        players: ['Ishan Kishan', 'Suryakumar Yadav', 'Kieron Pollard', 'Jasprit Bumrah', 'Tim David']
    },
    {
        team: 'RCB',
        captain: 'Faf du Plessis',
        primary: "red",
        secondary: "black",
        players: ['Virat Kohli', 'Glenn Maxwell', 'Mohammed Siraj', 'Dinesh Karthik', 'Anuj Rawat']
    },
    {
        team: 'KKR',
        captain: 'Shreyas Iyer',
        primary: "yellow",
        secondary: "blue",
        players: ['Venkatesh Iyer', 'Andre Russell', 'Pat Cummins', 'Varun Chakravarthy', 'Rinku Singh']
    },
    {
        team: 'SRH',
        captain: 'Aiden Markram',
        primary: "orange",
        secondary: "purple",
        players: ['Abdul Samad', 'Kane Williamson', 'Bhuvneshwar Kumar', 'T Natarajan', 'Umran Malik']
    },
    {
        team: 'DC',
        captain: 'David Warner',
        primary: "blue",
        secondary: "red",
        players: ['Prithvi Shaw', 'Rishabh Pant', 'Anrich Nortje', 'Axar Patel', 'Kuldeep Yadav']
    },
    {
        team: 'PBKS',
        captain: 'Shikhar Dhawan',
        primary: "pink",
        secondary: "red",
        players: ['Liam Livingstone', 'Mayank Agarwal', 'Arshdeep Singh', 'Ravi Bishnoi', 'Shahrukh Khan']
    }
]
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
var body = document.querySelector('body');
const getRandomColor = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    // btn.addEventListener('click', () => {
    //     h1.style.backgroundColor = getRandomColor();
    //     h1.style.borderRadius = '20px';
    //     h1.style.borderColor = getRandomColor();
    // });
btn.addEventListener('click', function() {
    let winner = arr[Math.floor(Math.random() * arr.length)];
    h1.innerHTML = winner.team;
    h1.style.backgroundColor = winner.primary;
    body.style.backgroundColor = winner.secondary;
    h1.style.borderRadius = '20px';
    h1.style.borderColor = getRandomColor();
    console.log(winner.team);
});