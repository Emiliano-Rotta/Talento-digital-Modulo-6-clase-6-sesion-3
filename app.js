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

