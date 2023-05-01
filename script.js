const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // getting the values from the inputs
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === "") {
        // shows error message
        // adds error class
        setErrorFor(name, "Name is required!");
    }   else {
        // add success class
        setSuccessFor(name);
    }

    if(emailValue === "") {
        // shows error message
        // adds error class
        setErrorFor(email, "Email address is required!");
    }   else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email!');
	} else {
        // add success class
        setSuccessFor(email);
    }

    if(subjectValue === "") {
        // shows error message
        // adds error class
        setErrorFor(subject, "Subject is required!");
    }   else {
        // add success class
        setSuccessFor(subject);
    }

    if(messageValue === "") {
        // shows error message
        // adds error class
        setErrorFor(message, "Message cannot be empty!");
    }   else {
        // add success class
        setSuccessFor(message);
    }
}

function setErrorFor(input, message) {
    const formBox = input.parentElement; // .form-box
    const small = formBox.querySelector("small");

    // add error message inside small
    small.innerText = message;

    // add error class
    formBox.className = "form-box error";
}

function setSuccessFor(input) {
    const formBox = input.parentElement;
    formBox.className = "form-box success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
