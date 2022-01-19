let intro = document.querySelector(".introduction")
let intro_play = document.querySelector(".intro-play")
let hallu_play = document.querySelector(".hallucination")
let tutorial = document.querySelector(".tutorial")
let close_btn = document.querySelector(".close")


intro_play.addEventListener("click", () => {
    intro.classList.remove("hide")

});


hallu_play.addEventListener("click", () => {
    tutorial.classList.remove("hide")

});

close_btn.addEventListener("click", () => {
    tutorial.classList.add("hide")
    intro.classList.add("hide")

});