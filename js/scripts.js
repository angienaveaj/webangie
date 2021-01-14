//nav MENU
let menu = document.getElementById('enlaces');
let hamburguesa = document.getElementsByClassName('menu-header')[0];

hamburguesa.addEventListener('click', function () {
    menu.classList.toggle('extra-clase');
})

//tootil
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//formulario
const form = document.getElementById('form')
const button = document.getElementById('submitbutton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const topic = document.getElementById('topic')
const message = document.getElementById('message')

const formIsValid = {
    name: false,
    email: false,
    topic: false,
    message: false,
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

name.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
})

topic.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.topic = true
})

message.addEventListener('change', (e) => {
    if (e.target.value.trim().length > 0) formIsValid.message = true
    e.target.value ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)
})

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if (valid == -1) form.submit()
    else alert('Formulario inválido')
}