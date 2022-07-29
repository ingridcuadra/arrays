class Libro {
    constructor(genero, titulo, autor) {
        this.genero = genero
        this.titulo = titulo
        this.autor = autor
    }
}

const libro1 = new Libro("Fantasía", "Harry Potter", "J. K. Rowling")
const libro2 = new Libro("Fantasía", "Percy Jackson", "Rick Riordan")
const libro3 = new Libro("Fantasía", "El Príncipe del Sol", "Claudia Ramírez Lomelí")
const libro4 = new Libro("Distopía", "Zelic", "Raiza Revelles y Sebastián Arango")
const libro5 = new Libro("Distopía", "1984", "George Orwell")
const libro6 = new Libro("Distopía", "Fahrenheit 451", "Ray Bradbury")

const fantasticos = [libro1, libro2, libro3]
const distopias = [libro4, libro5, libro6]

const libros = fantasticos.concat(distopias)

libros.splice(3,1)

console.table(libros)