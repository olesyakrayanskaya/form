'use strict'

const form = document.getElementById('form');

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const chekbox = document.getElementById("checkbox");
const chekboxError = document.querySelector("#checkbox + span.error");

function formValidation(inputEl, inputElError) {

    inputEl.addEventListener("input", function (event) {
        // Каждый раз, когда пользователь что-то вводит,
        // мы проверяем, являются ли поля формы валидными

        if (inputEl.validity.valid) {
            // Если на момент валидации какое-то сообщение об ошибке уже отображается,
            // если поле валидно, удаляем сообщение
            inputEl.classList.remove('invalid');
            inputElError.textContent = ""; // Сбросить содержимое сообщения
            inputElError.className = "error"; // Сбросить визуальное состояние сообщения
        } else {
            // Если поле не валидно, показываем правильную ошибку
            inputEl.classList.add('invalid');
            showError(inputEl, inputElError);
        }
    });

    form.addEventListener("submit", function (event) {
        // Если поле email валдно, позволяем форме отправляться

        if (!inputEl.validity.valid) {
            // Если поле email не валидно, отображаем соответствующее сообщение об ошибке
            showError(inputEl, inputElError);
            // Затем предотвращаем стандартное событие отправки формы
            event.preventDefault();
        }
    });
}

formValidation(email, emailError)
formValidation(chekbox, chekboxError)

function showError(inputEl, inputElError) {
    if (inputEl.type === 'checkbox') {
        if (inputEl.validity.valueMissing) {
            // Если поле пустое,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `You need to agry`;

        }
    } else {
        if (inputEl.validity.valueMissing) {
            // Если поле пустое,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `You need to enter an ${inputEl.name}.`;
        } else if (inputEl.validity.typeMismatch) {
            // Если поле содержит несоответствующее типу поля значение,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `Entered value needs to be an ${inputEl.name} value.`;
        } else if (inputEl.validity.tooShort) {
            // Если содержимое слишком короткое,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `${inputEl.name} value should be at least ${inputEl.minLength} characters; you entered ${inputEl.value.length}.`;
        }
        else if (inputEl.validity.tooLong) {
            // Если содержимое слишком длинное,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `${inputEl.name} value should be no more than ${inputEl.maxLength} characters; you entered ${inputEl.value.length}.`;
        }
        else if (inputEl.validity.patternMismatch) {
            // Если содержимое не соответствует паттерну,
            // отображаем следующее сообщение об ошибке
            inputElError.innerHTML = `${inputEl.name} value must match the specified format`;
        }
    }
    // Задаём соответствующую стилизацию
    inputElError.className = "error active";
}