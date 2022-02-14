import colors from 'colors';
import {
    existPath,
    convertAbsolutePath,
    directoryPath,
    filePath,
    filesExtensionMdPath,
    getLinksWithProperties,
    getLinkStatus,
    checkIfItHasLinks,
} from '../src/api.js';

// const rutaPrueba = './pruebas';
// const rutaPruebaFalla = './pruebas/...';
// const segundaRutaPrueba = './pruebas/subPrueba/subPrueba.md';

// console.log(existPath(rutaPrueba));
// console.log(validateAbsolutePath(rutaPrueba));
// console.log(convertAbsolutePath(segundaRutaPrueba));
// console.log(directoryPath(rutaPrueba));
// console.log(filePath(segundaRutaPrueba));
// console.log(mdExtension(segundaRutaPrueba));
// console.log(readFilePath(segundaRutaPrueba));
// console.log(filesExtensionMdPath(rutaPrueba));
// console.log(getLinksWithProperties(rutaPrueba));
// console.log(getLinkStatus(getLinksWithProperties(rutaPrueba)));

export const mdLinks = (path,options) => {
    return new Promise((resolve,reject) => {
        if(existPath(path)) {
            const pathAbsolute = convertAbsolutePath(path);
            const arrayLinksWithProperties = getLinksWithProperties(pathAbsolute);
            if(directoryPath(pathAbsolute)){
               const arrayFileExtensionMdPath = filesExtensionMdPath(pathAbsolute);
                if(arrayFileExtensionMdPath.length > 0 && !options.validate){
                   resolve(arrayLinksWithProperties);
                   
                }else if(arrayFileExtensionMdPath.length > 0 && options.validate){
                    resolve(getLinkStatus(arrayLinksWithProperties));
                } else{
                    reject(colors.bgRed('No files found'))
                }
            }else if(filePath(pathAbsolute)){
                if(checkIfItHasLinks>0 && !options.validate){
                    resolve(arrayLinksWithProperties);
                }else if(checkIfItHasLinks>0 && options.validate){
                    resolve(getLinkStatus(arrayLinksWithProperties));
                }else {
                    reject(colors.bgRed('No link found'))
                }
            }
        } else {
            reject(colors.bgRed('This route does not exist'));
        }
    }
    );
};

