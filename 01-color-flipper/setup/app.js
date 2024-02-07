const colors = ["green", "red", "blue", "yellow"] ;

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const default_number = random_number();
    document.body.style.backgroundColor = colors[default_number];
    color.textContent = colors[default_number];
});
function random_number() {
    return Math.floor(Math.random() * colors.length);
}