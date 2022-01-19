let hallu_play = document.querySelector(".hallucination")
let tutorial = document.querySelector(".tutorial")
let close_btn = document.querySelector(".close")

hallu_play.addEventListener("click", () => {
    tutorial.classList.remove("hide")

});

close_btn.addEventListener("click", () => {
    tutorial.classList.add("hide")

});