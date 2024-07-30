'use strict'

let inputImg = document.querySelector('#file');
const imgWrapper = document.querySelector('.form__file');
const clearBtn = document.querySelector('.form__btn-del-file');

inputImg.addEventListener('change', (event) => {

    const reader = new FileReader();

    reader.onload = function () {
        let output = document.createElement('img');
        output.className = 'form__file-img';
        output.style.width = '80px';
        output.style.height = '80px';
        output.style.borderRadius = '4px';
        imgWrapper.append(output);
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});
