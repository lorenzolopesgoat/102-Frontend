let numeros = [1, 2, 3]
console.log(numeros);
// Mostrar e adicionar no FIM
numeros.push (6)
console.log(numeros);
//Remover um item no final
numeros.pop(6)
console.log(numeros)

// Mostrar e adicionar no INICIO
numeros.unshift(-3);
console.log(numeros)
// Remover no INICIO
numeros.shift (1);
console.log(numeros);
// ou
console.log("Mostrando: "+numeros[3]);


//inserir um valor em uma posição especifica do array
//(index,remoção,inserir)
numeros.splice(2, 0, 17);
console.log(numeros);

numeros.splice(0, 2);
console.log(numeros);

//=====================================================================
//ARRAY de marca de carros
let garage = ["BYD", "Tesla", "Dodge", "Audi", "Lamborghini", "Jaguar", "Subaru", "Pagani", "Mazda"]
console.log(garage[6])

garage.push("Toyota")

console.log("tamanho do array", garage.length)

for (let i = 0; i < garage.length; i++) {
    console.log("Carros nº %d:", i+1)
    console.log("Marca: %s", garage[i])
}

for (carro in garage) {
    console.log(carro in garage);
    }


for (let carro in garage) {
    console.log(carro)
    
}