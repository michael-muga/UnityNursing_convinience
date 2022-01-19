function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message")

    messageElement.textContent= message;
    messageElement.classList.remove("form__message--success", "form__message--error")
    messageElement.classList.add("form__message--${type}")
}



document.addEventListener("DOMContentLoaded", () =>{
    const LoginForm = document.querySelector(".login");
    const SignupForm = document.querySelector(".signup");

    LoginForm.addEventListener("submit", e =>{
        e.preventDefault();

        setFormMessage(LoginForm, "error", "invalid email/password combination")
    })


})