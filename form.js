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

const form = document.getElementById('form');

form.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch('', {
        method: 'POST',
        body: new FormData(form)
    });

    let result = await response.json();

    console.log(result.message);
};