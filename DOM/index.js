const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
const container = document.querySelector('.container');
console.log({h1,
    parrafito,
    pid,
    input,})
;
console.log(input.value);
h1.innerHTML = 'Holi <b style="font-size:3rem;"> Victor</b>';
h2.innerText = 'Comercio del municipio';
//Obtener los atributos de algún elemento
console.log(h1.getAttribute('class')) ;
console.log(container.getAttribute('categoria'));

//Modificar los atributos de algún elemento
//h1.setAttribute('class','rojo');
// primero se pasa la clase que queremos modificar y luego su nuevo valor


//Función que funciona especificamente con las clases
h1.classList.add('rojo'); //añade otra clase al elemento
h1.classList.remove('verde'); // quita la clase verde del elemento h1

input.value = "3424";


//Crear elemento  HTML desde  cero
const img = document.createElement('img');
img.setAttribute('src','https://img2.freepng.es/20180320/pre/kisspng-calavera-day-of-the-dead-skull-october-31-clip-art-picture-day-of-dead-download-5ab15f1107ff44.3521227915215736490328.jpg');
console.log(img);
pid.innerHTML = "";
pid.append(img);




