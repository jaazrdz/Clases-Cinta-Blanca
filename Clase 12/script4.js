//Objeto
var persona= {
    nombre:'Jaz'
    apellido: 'Rdz'
    edad: 25
}

//Obejto 2
var saludos={
    mañana: 'Buenos días'
    día: 'Buenas tardes'
    noche: 'Buenas Noches'
}

//Creandofunciones para acceder a una propiedad del objeto
//Caso 1
console.log(persona);

function imprimirNombre(nombre){
nombre = nombre.toUpperCase()
console.log(nombre)
}

imprimirNombre(persona.apellido)

//Caso 2
function imprimirN(a){
    console.log(a.toUpperCase())
}

imprimirN(persona.nombre)

//Caso 3
function imprimirNombreMayus(p){
    var nombre= p.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayus(persona)

//Caso 4
/**Tambien podemos poner como parametro de una funcion al atributo de un objeto 
 * pero hay que tener en cuenta que el atributo existe y cuando se invoque la funcioon debemos
 * el nombre del objeto */

 function imprimirNombreDestruct({nombre}){
     console.log(nombre.toUpperCase))
 }

 imprimirNombreDestruct(persona)

 function imprimirSaludoDestruct({ noche }){
    console.log(noche.toUpperCase)
}

imprimirSaludoDestruct(saludos)