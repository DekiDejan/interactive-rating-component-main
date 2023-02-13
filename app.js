let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let btn3 = document.querySelector('.btn3')
let btn4 = document.querySelector('.btn4')
let btn5 = document.querySelector('.btn5')
let submit = document.querySelector('.submit')
let card1 = document.querySelector('.card-1')
let card2 = document.querySelector('.card-2')
let span = document.querySelector('span')

submit.addEventListener('mousedown', (e) => {
    e.preventDefault()
})

submit.addEventListener('click', () => {
    card1.style.visibility = "hidden";
    card2.style.visibility = "visible";
    if (btn1 === document.activeElement) {
        span.innerText = '1'
    } else if (btn2 === document.activeElement) {
        span.innerText = '2'
    } else if (btn3 === document.activeElement) {
        span.innerText = '3'
    } else if (btn4 === document.activeElement) {
        span.innerText = '4'
    } else if (btn5 === document.activeElement) {
        span.innerText = '5'
    } else span.innerText = '5'
})