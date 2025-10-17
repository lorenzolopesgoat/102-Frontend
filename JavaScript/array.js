let numeros = [1,2,3];
// Mostrar e adicionar no FIM
console.log(numeros);
numeros.push(6);
console.log(numeros);
// Mostrar e remover no INICIO
numeros.shift(1);
console.log(numeros)
// Mostrar e adicionar no INICIO
numeros.unshift(-3)
console.log(numeros)
// Imprimir um número especifico
console.log(numeros[4])
// ou
console.log("Mostrando: "+ numeros[3])

//=================================================================================
//ARRAY de marca de carros

let garage = ["BYD","Tesla", "Dodge", "Audi", "Lamborghini", "Jaquar", "Subaru", "Pagani", "Mazda"];

garage.push("Toyota");

// console.log(garage[6]);
console.log("Tamanho do Array: "+garage.length);

for (let i = 0; i < garage.length; i++) {
    console.log("Carro n°: " , i+1,": " +garage[i]);
    
}

for (let carro in garage) {
    console.log(carro)
    
}