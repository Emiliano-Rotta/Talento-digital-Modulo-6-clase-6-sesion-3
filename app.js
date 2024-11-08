// // Desestructuración de Objetos y Arrays

// const persona = {
//     nombre: "Erick",
//     edad: 25,
//     ciudad: "Santiago"
// }

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.ciudad)

// // const nombre = persona.nombre
// const { nombre, ciudad, edad } = persona

// const colores = ["naranja", "negro", "blanco"]



// const [ primero, segundo, tercero ] = colores
// console.log(primero)
// console.log(segundo)
// console.log(tercero)


// --------------------------------------------------------
// Valores por Defecto en Parámetros de Función
// function saludar (nombre = "Rodolfo", apellido ){
//     console.log("Hola " + nombre + " " + apellido)
// }

// saludar("juan", "Jara")
// saludar()

// // Juan jara y Undefined sanchez

// // Juan Jara y Rodolfo Sanchez

// // juan jara y sanchez undefined
 

//Spread Operator
// const numeros = [1,2,3]
// const numeroDos = [5,6,7]
// const concatenado = [...numeros, 4, ...numeroDos]

// console.log(concatenado)



// const persona = {
//     nombre: "Erick",
//     edad: 25,
//     ciudad: "Santiago"
// }

// const personaCompleta = { ...persona, apellido: "Godoy"}

// console.log(personaCompleta)

// function sumar(x, y, z){
//     console.log(x + y + z)
// }

// const valores = [2, 4, 6]
// sumar(...valores)

// // Ejercicio 1: Desestructuración y Valores por Defecto
// // Consigna:
// // Crea un objeto llamado producto con las propiedades nombre, precio y categoria.
// // Luego, crea una función llamada mostrarProducto que acepte un objeto como parámetro y desestructure sus propiedades.
// // Si no se pasa un precio, el valor por defecto debe ser 100.
// // La función debe retornar un mensaje como: "El producto [nombre] de la categoría [categoria] tiene un precio de [precio]".

// // const producto = { nombre: "compu", categoria: "Electrónica" };
// // function mostrarProducto({ nombre, categoria, precio = 100}){
// //     return `El producto ${nombre} de la categoría ${categoria} tiene un precio de ${precio}`
// // }
// // console.log(mostrarProducto(producto))


// // Ejercicio 2: Spread Operator y Concatenación de Arrays
// // Consigna:
// // Crea dos arrays: frutas con los valores ["manzana", "pera"] y verduras con los valores ["lechuga", "zanahoria"].
// // Usa el spread operator para combinar ambos arrays en uno llamado compras.
// //Recorre el array compras usando un for...of para imprimir cada elemento en la consola.


// const frutas = ["manzana", "pera"];
// const verduras = ["lechuga", "zanahoria"];

// const compras = [...frutas, ...verduras];
// for (const item of compras) { 
//     console.log(item)
// }
//-----------------------------------------------------------

//Ciclo for: Se utiliza para iterar un número determinado de veces o recorrer un array.
// const colores = ["naranja", "negro", "blanco"]

// // for (let i = 0; i < colores.length; i++) {
// //     console.log(colores[i]);
// // }

// //Ciclo for...of: Itera sobre los valores de un iterable (arrays, strings, etc.).
// // for (const element of colores) {
// //     console.log(element)
// // }

// //for...in: Itera sobre las propiedades de un objeto.
// const persona = {
//     nombre: "Erick",
//     edad: 25,
//     ciudad: "Santiago"
// }

// for (const key in persona) {
//     console.log(persona[key])
// }


// Desestructuración de Objetos
// Crea un objeto usuario con las propiedades nombre, edad y pais.
// Usando desestructuración, extrae las propiedades en variables individuales y muestra cada una en la consola.
const usuario = {
    nombre: 'Carlos',
    edad: 45,
    pais: 'Chile'
  };
  const { nombre, edad, pais } = usuario;
   
  console.log(`Nombre: ${nombre}, Edad: ${edad} y Pais: ${pais}`);
  

// Desestructuración de Arrays
// Crea un array lenguajes con los valores ["JavaScript", "Python", "Ruby"].
// Usando desestructuración, extrae el primer y segundo elemento en variables primero y segundo.
// Imprime los valores de primero y segundo en la consola.
const lenguajes = ["JavaScript", "Python", "Ruby"]
 
const [primero,segundo] = lenguajes
console.log(primero,segundo)

// Valores por Defecto en Parámetros de Función
// Escribe una función llamada calcularPrecio que acepte un parámetro precio y un parámetro opcional impuesto con valor por defecto de 0.21.
// La función debe retornar el precio con el impuesto aplicado.
// Prueba la función llamándola con un precio y sin especificar el impuesto.
function calcularPrecio(precio, impuesto = 0.21) {  
    return precio * (1 + impuesto); 
}
console.log(calcularPrecio(100));
console.log(calcularPrecio(100, 0.18));


// Spread Operator con Arrays
// Crea dos arrays numeros1 y numeros2, cada uno con algunos valores numéricos.
// Usa el spread operator para combinar ambos arrays en uno nuevo llamado numerosCombinados.
// Imprime numerosCombinados en la consola.
const numeros1 = [2, 4, 6, 8]
const numeros2 = [1, 3, 5, 7]
const numerosCombinados = [...numeros1, ...numeros2]
 
console.log(numerosCombinados)



// Spread Operator con Objetos
// Crea un objeto productoUno con las propiedades nombre, precio y categoria.
// Crea un nuevo objeto productoDos usando el spread operator para copiar productoUno y agrega una nueva propiedad disponible con valor true.
// Imprime productoDos en la consola.
let productoUno = {
    nombre: "Coca-Cola",
    precio: 1100,
    categoria: "Bebida"
}

let productoDos = {...productoUno, disponible: true}

console.log(productoDos)



// Ciclo for
// Crea un array colores con los valores ["rojo", "verde", "azul"].
// Usa un ciclo for para recorrer el array e imprime cada color junto con su índice en la consola.
const colores = ["rojo", "verde", "azul"]
for (let i = 0; i < colores.length; i++) {
    console.log(`Color ${i}: ${colores[i]}`)
    
}

// Ciclo for...of
// Crea un array mascotas con los valores ["perro", "gato", "pez"].
// Usa un ciclo for...of para imprimir cada mascota en la consola.
const mascotas = ["perro", "gato", "pez"]
for (const element of mascotas) {
    console.log(element)
}

// Ciclo for...in con Objetos
// Crea un objeto auto con las propiedades marca, modelo y año.
// Usa un ciclo for...in para recorrer el objeto e imprime cada propiedad y su valor en la consola.
const auto = { marca: "Toyota", modelo: "Corolla", año: 2018 };
for (const key in auto) {
    console.log(`${key}: ${auto[key]}`)
}

// Desestructuración y Valores por Defecto
// Crea una función llamada mostrarPerfil que acepte un objeto perfil con las propiedades nombre, edad, y pais (siendo pais opcional y con valor por defecto "Chile").
// La función debe imprimir un mensaje como "Nombre: [nombre], Edad: [edad], País: [pais]".
// Prueba la función llamándola con un objeto que incluya solo nombre y edad.
function mostrarPerfil({ nombre, edad, pais = "Chile" }) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, País: ${pais}`);
  }
  
  const perfil = { nombre: "Lucía", edad: 30 };
  mostrarPerfil(perfil);
  
// Desestructuración de Arrays y Uso de Spread Operator en Funciones
// Crea una función llamada sumarNumeros que acepte tres números como parámetros y retorne su suma.
// Crea un array valores con tres números y usa el spread operator para pasarlo a sumarNumeros.
// Imprime el resultado en la consola.
function sumarNumeros(x, y, z) {
    return x + y + z;
}

const valores = [3, 4, 5];
console.log(sumarNumeros(...valores));