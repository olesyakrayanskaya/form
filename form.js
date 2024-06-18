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

const form = document.getElementById('formId')

form.onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form)

    formData.set("org", formData.get("org") + "aaaaaaaaaaa" )

    for (var [key, value] of formData.entries()) { 
        console.log(key, value);
      }

    let response = await fetch('', {
      method: 'POST',
      body: formData
    });

    let result = await response.json();

  };

// const sendBtn = document.getElementById('submit');
// sendBtn.addEventListener('click', inputValidate());