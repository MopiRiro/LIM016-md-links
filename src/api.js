import { existsSync, statSync, readdirSync } from "fs";
import { isAbsolute, resolve, extname} from "path";

const rutaPrueba = './pruebas';

//FUNCION 1: Comprobar si existe la ruta
//verificar sincrónicamente si existe un archivo
export const validatePath = (ePath) => existsSync(ePath);
console.log(validatePath(rutaPrueba));

//FUNCION 2: Validar si es una ruta absoluta, si es relativa convertirla a absoluta
export const pathAbsolute = (ePath) => {
    if(isAbsolute(ePath)){
        return ePath;
    } else {
        return resolve(ePath)

    }
}
console.log(pathAbsolute(rutaPrueba));

//FUNCION 3: Validar si es un directorio y recorrerlo
export const directory = (ePath) => {
    let stat = statSync(ePath);
    return stat.isDirectory();
}
console.log(directory(rutaPrueba));

//FUNCION 4: Validar si es un archivo
export const file = (ePath) => {
    let stat = statSync(ePath);
    return stat.isFile();
}
console.log(file(rutaPrueba));

// Validar si es un archivo con extensión .md
//SE debe aplciar recursividad
export const openDir = (ePath) => {
    let linksItem = readdirSync(ePath);
    let mdArray = [];
    linksItem.forEach((item) => {
        let iPath = ePath + '/'+item;
        // console.log(iPath);
        // console.log(file(iPath));
        if(file(iPath)){
            if (extname(item) === ".md"){
                mdArray.push(iPath);
            }   
            // console.log(mdArray);
         } else {
                mdArray.push(openDir(iPath));
                // console.log(mdArray);
        }
    });
    return mdArray.flat(Infinity);
};
console.log(openDir(rutaPrueba));


//FUNCION 5: Leer los archivos

// const readFile = (ePath) => readFileSync(ePath, { encoding: "utf-8", flag: "r" });

//FUNCION 6: Extraer archivos .md recorriendo directorios

//FUNCION 7: Extraer links

//FUNCION 8: Validar si tiene links
