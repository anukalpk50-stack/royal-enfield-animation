let img = document.querySelector(".card");
let love = document.querySelector("#love");
let h2 = document.querySelector("h2");
img.addEventListener("dblclick", function () {
  console.log("double clicked");
  love.style.opacity = 1;
  love.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  setTimeout(function () {
    love.style.transform = "translate(-50%, -400%) scale(1) rotate(0deg)";
    console.log("object");
  }, 700);
  setTimeout(function () {
    love.style.opacity = 0;
  
  }, 1000);
    setTimeout(function () {

    love.style.transform = "translate(-50%, -250%) scale(1) rotate(0deg)";
  }, 1500);
});
