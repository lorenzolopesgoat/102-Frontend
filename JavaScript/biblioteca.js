let livro1 = {
    titulo: 'Extraordinário',
    autor: 'R. J. Palacio',
    ano: 2013,
    genero: 'Drama',
};

let livro2 = {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ano: 1943,
    genero: 'Fábula',
};

let livro3 = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J. K. Rowling',
    ano: 1997,
    genero: 'Fantasia',
};

let livro4 = {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ano: 1899,
    genero: 'Romance',
};

let livro5 = {
    titulo: 'A Culpa é das Estrelas',
    autor: 'John Green',
    ano: 2012,
    genero: 'Romance',
};

let livro6 = {
    titulo: '1984',
    autor: 'George Orwell',
    ano: 1949,
    genero: 'Ficção científica',
};

let livros =[livro1,livro2,livro3,livro4,livro5,livro6]
console.log(livros)

console.log(
    'Aqui esta o livros de Drama: %s de %s', livro1.titulo, livro1.autor
)

console.log(
    'Aqui esta o livros de Fábula: %s de %s', livro2.titulo, livro2.autor
)

console.log(
    'Aqui esta o livros de Fantasia: %s de %s', livro3.titulo, livro3.autor
)

console.log(
    'Aqui esta o livros de Romance: %s de %s e %s de %s', livro4.titulo, livro4.autor, livro5.titulo, livro5.autor
)

console.log(
    'Aqui esta o livros de Ficção Científica: %s de %s', livro6.titulo, livro6.autor
)

console.log('Esse eh o livro mais antigo: %s de %s', livro4.titulo, livro4.ano)