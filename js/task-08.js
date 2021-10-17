const formRef = document.querySelector('.login-form');

const formSubmit = (event) => {
    event.preventDefault();
    const formEL = event.currentTarget.elements;
    const email = formEL.email.value;
    const password = formEL.password.value;
    if (!email || !password) {
        alert("Все поля должны быть заполнены");
        return;
    }
    const formData = new FormData(event.currentTarget);
    const userData = {};
        formData.forEach((value, name) => {
            userData[name] = value;
        });
    
    console.log(userData)
};

formRef.addEventListener("submit", formSubmit);









