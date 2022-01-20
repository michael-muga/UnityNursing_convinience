function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".form__message")

    messageElement.textContent= message;
    messageElement.classList.remove("form__message--success", "form__message--error")
    messageElement.classList.add("form__message--${type}")
}



document.addEventListener("DOMContentLoaded", () =>{
    const LoginForm = document.querySelector(".login");
    const SignupForm = document.querySelector(".signup");

    var emailInput = document.querySelector("input#loginemail").val();
    var passwordInput = document.querySelector("input#password").val();

    LoginForm.addEventListener("submit", e =>{
        e.preventDefault();

        
       // setFormMessage(SignupForm, "success", "Signup Succesfull you can now login your account")
        
        
        setFormMessage(LoginForm,"error", "Login succesfull")
    })


})