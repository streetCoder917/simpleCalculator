let fnum = document.getElementById('fnum');
let lnum = document.getElementById('lnum');
let add_button = document.getElementById('add');
let sub_button = document.getElementById('sub');
let mult_button = document.getElementById('mult');
let divi_button = document.getElementById('divi');
let result_process = document.getElementById('res');



function add(x, y) {
    return x + y
}
function sub(x, y) {
    return x - y
}
function mult(x, y) {
    return x * y
}
function divi(x, y) {
    return x / y
}


add_button.addEventListener('click', function() {
    result_process.innerHTML = add(Number(fnum.value), Number(lnum.value))
})

sub_button.addEventListener('click', function() {
    result_process.innerHTML = sub(Number(fnum.value), Number(lnum.value))
})

mult_button.addEventListener('click', function() {
    result_process.innerHTML = mult(Number(fnum.value), Number(lnum.value))
})

divi_button.addEventListener('click', function() {
    result_process.innerHTML = divi(Number(fnum.value), Number(lnum.value))

    if (result_process.innerHTML === 'NaN' || result_process.innerHTML === 'Infinity') {
        result_process.innerHTML = "Can't Divide By Zero"
    }
})