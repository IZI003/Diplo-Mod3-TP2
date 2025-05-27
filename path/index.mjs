import path from "path";

const file_path = './data/ejemplo.txt';
const dir_name = path.dirname(file_path);
console.log('Directorio base'.dir_name);

const base_name = path.basename(file_path, '.txt');
console.log('Nombre del archivo:', base_name);

// Obtener la extensión del archivo
const ext_name = path.extname(file_path);
console.log('Extensión del archivo:', ext_name);

// Crear una ruta unida
const new_path = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', new_path);