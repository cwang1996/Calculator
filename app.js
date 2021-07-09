const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');

const clear = document.getElementById('clear');
const result = document.querySelector('.textfield');

one.addEventListener('click', function(){
    result.value += '1';
})

two.addEventListener('click', function(){
    result.value += '2';
})

three.addEventListener('click', function(){
    result.value += '3';
})

four.addEventListener('click', function(){
    result.value += '4';
})

five.addEventListener('click', function(){
    result.value += '5';
})

six.addEventListener('click', function(){
    result.value += '6';
})

seven.addEventListener('click', function(){
    result.value += '7';
})

eight.addEventListener('click', function(){
    result.value += '8';
})

nine.addEventListener('click', function(){
    result.value += '9';
})

plus.addEventListener('click', function(){
    result.value += '+';
})

minus.addEventListener('click', function(){
    result.value += '-';
})

multiply.addEventListener('click', function(){
    result.value += '*';
})

divide.addEventListener('click', function(){
    result.value += '/';
})

clear.addEventListener('click', function(){
    result.value = '';
})

equal.addEventListener('click', function(){
    result.value = eval(result.value);
})


