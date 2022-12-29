const h1 = document.querySelector('h1');
const input1 =  document.getElementById('calculo1');
const input2 =  document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.getElementById('result');
const form = document.querySelector('#form');

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){
    // console.log({event});
    event.preventDefault();
    const sumarInput = Number(input1.value) +  Number(input2.value);
    result.innerText = "Resultado: "+sumarInput;

}
