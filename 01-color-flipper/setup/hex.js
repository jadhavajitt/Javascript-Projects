const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener("click", function(){
    let random_number = "#";
    for (let i = 0; i < 6; i++) {
         random_number += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor = random_number;
    color.textContent = random_number;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length)
}
