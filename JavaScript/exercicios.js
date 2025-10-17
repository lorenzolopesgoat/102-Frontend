let frutas = ["Abacaxi", "Banana", "Maça", "Melão", "Uva"]
console.log(frutas)

frutas.unshift ("Maça verde", "Morango");
console.log(frutas)

frutas.pop("Uva");
console.log(frutas)

frutas.splice(0, 0, 'Pera');
frutas.splice(2, 0, 'Mamao');
frutas.splice(3, 0, 'Laranja');
console.log(frutas)

frutas.splice(1, 1);
console.log(frutas);
