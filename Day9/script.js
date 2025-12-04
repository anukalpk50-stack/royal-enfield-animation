// var arr = [10, 20, 30, 40, 50];
// var num = 0;
// arr.forEach(function(elem){
//     num = num + elem;
// })
// console.log(num);
var arr2 = [
    {
        user : 1,
        age : 12,
    },
    {
        user : 2,
        age : 14,
    },
    {
        user : 3,
        age : 15,
    },
    {
        user : 4,
        age : 34,
    },
    {
        user : 5,
        age : 45,
    },
]
// var sum = 0;
// arr2.forEach(function(elem){
// sum = sum + elem.age;
// })
// console.log(sum/arr2.length);
// console.log(sum);

const users = [
  {
    id: 1,
    fullName: "Arjun Sharma",
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=400&auto=format&fit=crop",
    profession: "Senior Frontend Engineer",
    description: "Based in Bengaluru, obsessed with React performance and building scalable UI systems. Mentors junior devs in his free time.",
    tags: ["JavaScript", "React", "WebDev", "Mentor"]
  },
  {
    id: 2,
    fullName: "Priya Desai",
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=400&auto=format&fit=crop",
    profession: "UX/UI Designer",
    description: "A Mumbai-based designer specializing in user-centric digital experiences for sustainable fashion brands. Believes less is more.",
    tags: ["Design", "Figma", "UX Research", "Creative"]
  },
  {
    id: 3,
    fullName: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1596661730746-bab8891aa5e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvbmRlJTIwYm95fGVufDB8fDB8fHww",
    profession: "Investment Banker",
    description: "With over 10 years in Delhi's financial sector, Vikram focuses on high-stakes mergers and acquisitions in the tech space.",
    tags: ["Finance", "Stocks", "Leadership", "Corporate"]
  },
  {
    id: 4,
    fullName: "Zoya Khan",
    image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?q=80&w=400&auto=format&fit=crop",
    profession: "Travel Photographer & Blogger",
    description: "Currently exploring the hidden valleys of Himachal Pradesh. Storyteller capturing culture and landscapes through her lens.",
    tags: ["Photography", "Travel", "Blogging", "Adventure"]
  },
  {
    id: 5,
    fullName: "Rohan Iyer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop",
    profession: "Chef & Restaurateur",
    description: "Owner of 'The Spice Route' in Chennai. Passionate about fusing traditional South Indian cuisine with modern plating techniques.",
    tags: ["Food", "Chef", "Entrepreneur", "Cooking"]
  }
];
sum = ''
users.forEach(function(elem){
    sum = sum + `   <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
            <h5>${elem.tags}</h5>
        </div> `;
})
var main = document.querySelector('main');
main.innerHTML = sum;