import path from "path";

const file_path = './data/ejemplo.txt';
console.log('Directorio base: '.path.dirname(file_path));

console.log('Nombre del archivo: ', path.basename(file_path, '.txt'));

// Obtener la extensión del archivo
console.log('Extensión del archivo: ', path.extname(file_path));

// Crear una ruta unida
console.log('Nueva ruta: ', path.join('/user', 'docs', 'newfile.txt'));