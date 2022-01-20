let intro = document.querySelector(".introduction")
let intro_play = document.querySelector(".intro-play")
let hallu_play = document.querySelector(".hallucination")
let tutorial = document.querySelector(".tutorial")
let ampathy = document.querySelector(".ampathy")
let ampath_btn = document.querySelector(".ampathy-btn")
let medic = document.querySelector(".med")
let medic_btn = document.querySelector(".med-btn")
let play = document.querySelectorAll(".play")
let close_btn = document.querySelectorAll(".close")


intro_play.addEventListener("click", () => {
    intro.classList.remove("hide")
    tutorial.classList.add("hide")
    ampathy.classList.add("hide")
    medic.classList.add("hide")

});


hallu_play.addEventListener("click", () => {
    tutorial.classList.remove("hide")
    intro.classList.add("hide")
    ampathy.classList.add("hide")
    medic.classList.add("hide")

});

ampath_btn.addEventListener("click", () => {
    ampathy.classList.remove("hide")
    tutorial.classList.add("hide")
    intro.classList.add("hide")
    medic.classList.add("hide")

});


medic_btn.addEventListener("click", () => {
    medic.classList.remove("hide")
    tutorial.classList.add("hide")
    intro.classList.add("hide")
    ampathy.classList.add("hide")

});
close_btn.forEach(item => {
    item.addEventListener("click", e => {
        play.classList.add("hide")
    })
})

// close_btn.addEventListener("click", () => {
//     intro.classList.add("hide")


// });


// close_btn.addEventListener("click", () => {
//     tutorial.classList.add("hide")

// });


//Q/A JS//
let cancel = document.querySelector(".cancel")
let answer = document.querySelector(".quest")
let quiz = document.querySelector("#quiz")

quiz.addEventListener("click", () => {
    answer.classList.remove("hide")
})

cancel.addEventListener("click", () => {
    answer.classList.add("hide")
})