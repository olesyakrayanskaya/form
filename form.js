'use strict'

function inputValidate() {
    const inputs = document.querySelectorAll('.form__input');
    const errMsg = document.querySelector('.error-msg');

    inputs.forEach((input) => {
        if (!input.checkValidity()) {
            errMsg.innerHTML = input.validationMessage;
        }
    })
}

// const sendBtn = document.getElementById('submit');
// sendBtn.addEventListener('click', inputValidate());