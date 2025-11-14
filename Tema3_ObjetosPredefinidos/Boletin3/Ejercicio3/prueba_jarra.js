const jarra1 = new Jarra(10, 4); // Crea una jarra de 10 litros de capacidad y llena con 4 litros
const jarra2 = new Jarra(15, 8); // Crea una jarra de 15 litros de capacidad y llena con 8 litros

// Probamos el método estático para comparar la cantidad de dos jarras
let jarraConMasCantidad = Jarra.comparar(jarra1, jarra2); // Debería devolver jarra2, ya que contiene más litros que jarra1
console.log(`Jarra con más cantidad: ${jarraConMasCantidad}`);

// Probamos el método de llenar jarra1 desde jarra2
jarra1.llenarDesde(jarra2); // Llena jarra1 con el contenido que quepa de jarra2. A jarra1 le quedan 6 litros para llenarse, por lo que jarra1 debería llenarse completamente (4+6=10 litros) y jarra2 quedar con 2 litros (8-6= 2 litros)
console.log(`cantidad jarra1: ${jarra1.cantidad} //Debería mostrar 10 litros)`); // Debería mostrar 10 litros
console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 2 litros)`); // Debería mostrar 2 litros
// Probamos el método llenar()
jarra2.llenar(); //Debería llenarse completamente la jarra2
console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // Debería mostrar 15 litros
// Probamos el método vaciar()
jarra2.vaciar(); //Debería vaciarse completamente la jarra2
console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 0 litros)`); // Debería mostrar 0 litros
// Intentamos a asignar a la cantidad de jarra2 un valor que supere la capacidad
jarra2.cantidad = 30;
console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // Debería mostrar 15 litros
// Intentamos a asignar a la cantidad de jarra2 un valor negativo
try {
    jarra2.cantidad = -10;
} catch (error) {
    console.log(`Se produjo el error: "${error.message}"`);
}
console.log(`cantidad jarra2: ${jarra2.cantidad} (Debería mostrar 15 litros)`); // Debería mostrar 15 litros