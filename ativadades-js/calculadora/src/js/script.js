function insert(num) {
    let numero = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = numero + num;
}

function clean() {
    document.getElementById('result').innerHTML = '0'
}

function back() {
    let result = document.querySelector('#result').innerHTML;
    document.querySelector('#result').innerHTML = result.substring(0, result.length -1)
}

function calcular() {
    let result = document.querySelector('#result').innerHTML;
    if(result) {
        document.querySelector('#result').innerHTML = eval(result)
    } else {

    }
}