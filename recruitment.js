function review() {
    let name = document.querySelector("#name").value;

    alert(`Hi ${name} Thankyou for applying. your application will be reviewed and a feedback email will be sent to you.`)


}
let application = document.querySelector(".job")
let form = document.querySelector(".frm")

application.addEventListener("click", review);