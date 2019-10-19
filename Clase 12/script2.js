var nombre= 'jazmin', apellido= 'rdz', edad=24;
console.log(nombre)

var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas)

var apellidoEnMinusculas = apellido.toLowerCase()
console.log(apellidoEnMinusculas);

var primeraLetraNombre = nombre.charAt(1);
console.log(primeraLetraNombre)

var cantidadLetrasApellido = apellido.length;
console.log(cantidadLetrasApellido)

var nombreCompleto = `${nombre} ${apellido}` //Template
console.log(nombreCompleto)

function imprimir(){
    console.log(`${nombre} tiene ${edad} años`)
  }

  imprimir()

  