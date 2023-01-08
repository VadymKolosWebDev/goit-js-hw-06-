const form = document.querySelector('.login-form');

const onFormSubmit = function (event) {
    event.preventDefault()

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (mail === "" || password === "") {
        alert("Всі поля повинні бути заповнені")
    } else {
         const formData = {
        mail,
        password
    }

        console.log(formData)
        form.reset()
    }


}

form.addEventListener('submit', onFormSubmit)