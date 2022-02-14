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

// if(!existPath(rutaPruebaFalla)){
//     console.log('This route does not exist');
// }

// if(existPath(rutaPrueba)) {
//     // console.log(validateAbsolutePath(rutaPrueba));
//     const pathAbsolute = convertAbsolutePath(rutaPrueba);
//     // console.log(pathAbsolute);
//     if(directoryPath(pathAbsolute)){
//        const arrayFileExtensionMdPath = filesExtensionMdPath(pathAbsolute);
//         if(arrayFileExtensionMdPath.length > 0){
//            const arrayLinksWithProperties = getLinksWithProperties(pathAbsolute);
//         //    console.log(arrayLinksWithProperties);
//            const arrayWithStatus = getLinkStatus(arrayLinksWithProperties);
//            arrayWithStatus.then((res) => {
//                 console.log(res);
//            })
//         }else{
//             console.log('no hay links')
//         }
//     }else if(filePath(pathAbsolute)){
//         const arrayLinksWithProperties = getLinksWithProperties(pathAbsolute);
//         console.log('si es archivo', arrayLinksWithProperties);
//     }
// } else {
//     console.log('Ruta no existe');
// }

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
                    reject('no hay archivos')
                }
            }else if(filePath(pathAbsolute)){
                if(checkIfItHasLinks>0 && !options.validate){
                    resolve(arrayLinksWithProperties);
                }else if(checkIfItHasLinks>0 && options.validate){
                    resolve(getLinkStatus(arrayLinksWithProperties));
                }else {
                    reject('no hay links')
                }
            }
        } else {
            reject('Ruta no existe');
        }
    }
    );
};

