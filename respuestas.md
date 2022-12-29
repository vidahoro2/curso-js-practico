## Respuestas al Test de JavaScript

Recuerda que estas respuestas (o al  menos la mayoría) NO SON ABSOLUTAS. Es completamente válido (en la mayoría de casos) si tienes otras respuestas. Recuerda que podemos discutirlo en la sección de comentarios del curso. :D


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

    Son espacios en memoria donde podemos guardar información.

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

    Cuando se declara una variable solamente se le da un nombre, y cuando se inicializa una variable
    se le está añadiendo un valor inicial.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

    Los números son valores de tipo entero o float mientras que los string son cadenas de caracteres, por lo tanto no se pueden sumar con la suma decimal-



- ¿Cuál operador me permite sumar o concatenar?

    El operador "+" nos permita concatenar y sumar numeros y variables dependiendo de cada caso.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre : string
- Apellido : string
- Nombre de usuario en Platzi : string
- Edad  : number
- Correo electrónico: string
- Mayor de edad : boolean
- Dinero ahorrado : number
- Deudas : number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.


```
let nombre = "Victor";
let apellido = "Ome";
let nombreDeUsuario = "@vdome";
let edad = 23;
let correoElectronico = "vdome@unicauca.edu.co";
let esMayorDeEdad  = true;
let dineroAhorrado = 1231231;
let deudas= 1200;


```


### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)


```js
    let  nombreCompleto = "Victor Daniel Ome Rojas";
    let dineroAhorrado = 1000;
    let deudas = 500;
    let dineroReal= dineroAhorrado - dineroReal;

    console.log(dineroReal);


```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

    Es la forma en que agrupamos código para hacerlo útil en el futuro
- ¿Cuándo me sirve usar una función en mi código?

    cuando tienes que realizar acciones repetitivas, la creación de una función te ayudaría a reutilizar código
- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    los parametros son las variables que recibe la función cuando la estamos creando, y les enviamos argumentos cuando las ejecutamos

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
let name = "Juan David";
let lastName = "Castro Gallego";
let completeName = name + lastname;
let nickName = "juandc";

function mostrarDatos(name,lastName,nickName){

    console.log("Mi nombre es: "+name+" pero prefiero que me digas "+ nickName);
}


```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    son bloques de código que se usan dependiendo si una condición es válida o no

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    if
    elseif
    switch
    EL Condicional if nos permite hacer validaciones completamente distintas en caa validación o condicional , a diferencia del switch en la que todos los casos se comparan con la misma variable

- ¿Puedo combinar funciones y condicionales?

    si, las funciones pueden encapsular cualquier bloque de código

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
function conseguirTipoSuscripcion(suscripcion){

    if(suscripcion == "Free"){
       console.log("Solo puedes tomar los cursos gratis");
       return;
} if(suscripcion == "Basic"){
        console.log("Puedes tomar casi todos los curso de Platzi por un mes");
        return;
        
} if(suscripcion == "Expert"){
        console.log("Puedes tomar los cursos de Platzi durante un año");        
        return;
}
    if(suscripcion == "ExpertDuo"){

        console.log("Tu y alguien más pueden tomar todos los curso de Platzi durante un año");
        return;
    }
    else{
        console.warn("Ese tipo de suscripción no existe");
        return;
    }   
    
}


```


### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```js

const tipoDeSuscripciones ={

  free:"Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los curso de Platzi por un mes",
    expert: "Puedes tomar los cursos de Platzi durante un año",
    expertduo:"Tu y alguien más pueden tomar todos los curso de Platzi durante un año"
};
function conseguirTipoSuscripcion(suscripcion){

    if(tipoDeSuscripciones[suscripcion]){
       console.log(tipoDeSuscripciones[suscripcion]);
        return;
        } 
    console.warn("Ese tipo de suscripción no existe");
    
}


```

## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    La forma de ejecutar un bloque de código hasta que se cumpla cierta condición
- ¿Qué tipos de ciclos existen en JavaScript?

    while, for,  do while
- ¿Qué es un ciclo infinito y por qué es un problema?

    Es cuando la validación de los condicionales nunca se cumple y son problema porque una vez se ingresa al ciclo infinito, el código faltante no se va a ejecutar

- ¿Puedo mezclar ciclos y condicionales?

    en efecto

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```js

let i = 0;
while(i < 5){

    console.log("El valor de i es: " +i);
    i++;
}
let i = 10;
while(i>= 2){
    console.log("El valor de i es: "+i);
    i--;

    
}


```
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```js
let respuesta = prompt("Cúánto es 2 + 2? ")
while(respuesta != '4'){

    let pregunta = prompt("Cuánto s 2 +2 ");
    respuesta = pregunta;
}

```
## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?

    Es una lista de elementos  

    ````js
    const array = [1,22,"sdds"];
    
    ```

- ¿Qué es un objeto?

    Es una lista de elementos pero cada elemento tiene un nombre clave 

    ```js
    const obj1 = {
        nombre : "Perro",
        Edad : 12,
        mascota : "Franciso"
    }
    
    ```

- ¿Cuándo es mejor usar objetos o arrays?

    Arrays, cuando lo que haremos en un elemento es lo mismo que en todos los demás 
    y con objetos, cuando los nombres de cada elemento son importantes para nuestro algoritmo.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    Los arrays pueden guardar objetos
    Y los objetos pueden guardar arrays
### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
 ```js
   function imprimirPrimerElementoArray(arr){

    console.log(arr[0]);
}


 ```
 ### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js

   function imprimirPrimerElementoArray(arr){

    console.log(arr[0]);
}


```


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
````js

function imprimirElementoPorElemento(obj1){
    const arr = Object.values(obj1);
    for(let i=0; i<arr.length;i++){
        console.log(arr[i]);
        
    }

    
}
```