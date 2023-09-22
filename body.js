function init() {
    let button = document.querySelector('#btn')
    button.addEventListener("click",
    function calcImc() {
        let altura = document.getElementById('altura').value
        let peso= document.getElementById('peso').value
        let imc = peso/altura
        
        document.getElementById('resultado').innerHTML= imc
    })
}

init()