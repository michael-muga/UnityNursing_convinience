let intro = document.querySelector(".introduction")
let intro_play = document.querySelector(".intro-play")
let hallu_play = document.querySelector(".hallucination")
let tutorial = document.querySelector(".tutorial")
let ampathy = document.querySelector(".ampathy")
let ampath_btn = document.querySelector(".ampathy-btn")

let close_btn = document.querySelector(".close")


intro_play.addEventListener("click", () => {
    intro.classList.remove("hide")
    tutorial.classList.add("hide")
    ampathy.classList.add("hide")

});


hallu_play.addEventListener("click", () => {
    tutorial.classList.remove("hide")
    intro.classList.add("hide")
    ampathy.classList.add("hide")

});

ampath_btn.addEventListener("click", () => {
    ampathy.classList.remove("hide")
    tutorial.classList.add("hide")
    intro.classList.add("hide")

});

// close_btn.addEventListener("click", () => {
//     intro.classList.add("hide")
// });

// close_btn.addEventListener("click", () => {
//     tutorial.classList.add("hide")
// });