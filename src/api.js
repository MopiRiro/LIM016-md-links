import { existsSync, statSync, readdirSync, readFileSync} from "fs";
import { isAbsolute, resolve, extname} from "path";
import fetch from "node-fetch";

//Rutas de prueba
const rutaPrueba = './pruebas';
const segundaRutaPrueba = './pruebas/prueba.md';
const terceraRutaPrueba = './pruebas/subPrueba/subPrueba.md';

//FUNCION 1: Comprobar si existe la ruta
//Returns true if the path exists, false otherwise
export const existPath = (ePath) => existsSync(ePath); 
// console.log('aqui', existPath(rutaPrueba));

//FUNCION 2: Validar si es una ruta absoluta, si es relativa convertirla a absoluta

// Validando si la ruta es absoluta
export const validateAbsolutePath = (ePath) => isAbsolute(ePath);
// console.log(validateAbsolutePath(rutaPrueba));

/*Usamos la funcion validateAbsolute para comprobar que la ruta sea absoluta
de no ser el caso usara metodo resolve para convertir la ruta relativa a absoluta
-Se puede utilizar condicionales IF o el operador ternario */
export const convertAbsolutePath = (ePath) => (validateAbsolutePath(ePath) ? ePath : resolve(ePath));
// console.log(convertAbsolutePath(rutaPrueba));

//FUNCION 3: Validar si es un directorio y recorrerlo
export const directoryPath = (ePath) => statSync(ePath).isDirectory();
// {
//     let stat = statSync(ePath);
//     return stat.isDirectory();
// }
// console.log(directoryPath(rutaPrueba));

//FUNCION 4: Validar si es un archivo
export const filePath = (ePath) => statSync(ePath).isFile();
// {
//     let stat = statSync(ePath);
//     return stat.isFile();
// }
// console.log(filePath(rutaPrueba));

//Valida la extension del archivo '.md'
export const mdExtension = (ePath) => extname(ePath);
// console.log(mdExtension(segundaRutaPrueba));


//FUNCION 5: Leer los archivos
export const readFilePath = (ePath) => readFileSync(ePath,'utf-8');
// console.log(readFilePath(segundaRutaPrueba));


//FUNCION 6: Extraer archivos .md recorriendo directorios
export const filesExtensionMdPath = (ePath) => {
    let mdArray = [];
    if(directoryPath(ePath)){
        let linksItem = readdirSync(ePath);
        linksItem.forEach((item) => {
            let iPath = ePath + '/'+item;
            mdArray.push(filesExtensionMdPath(iPath));
            }      
        );
    } else if (mdExtension(ePath) === ".md"){
        mdArray.push(convertAbsolutePath(ePath));
    }
    return mdArray.flat(Infinity);
};
// console.log(filesExtensionMdPath(rutaPrueba));

//FUNCION 7: Extraer links
//Expresiones regulares para reconocer la estrucutra de los links
//Función para obtener los links con sus propiedades de los archivos '.md' en un array
export const getLinksWithProperties = (ePath) => {
    const arrayPrueba =[]; //array donde guardo los datos del link
      // eslint-disable-next-line no-useless-escape
      const urlText = /\[([^\[]+)\](\(.*\))/gm;
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      const justText = /\[[^\s]+(.+?)\]/gi;

    filesExtensionMdPath(ePath).forEach((eachRouteMd) => {
        const readEachMd = readFilePath(eachRouteMd);
        const linkAll = readEachMd.match(urlText);
        if(linkAll){
            linkAll.forEach((link) => {
                    const urlRegexPrueba = link.match(urlRegex);
                    const justTextPrueba = link.match(justText);
                    const arrayProperties = {
                            href: urlRegexPrueba.join().slice(0,-1),
                            text: justTextPrueba.join().slice(1,-1),
                            file: eachRouteMd,
                    };
                    arrayPrueba.push(arrayProperties);
            });
        }
    })
    return arrayPrueba;
};
    // console.log(getLinksWithProperties(rutaPrueba));


//FUNCION 8: Validar si tiene links
//Ejemplo del uso de Fetch 
//Para testear esta funcion necesitaras mockear fetch
// fetch('http://example.com/movies.json')
//   .then(data => 
//     {
//         if(data.status>= 200 && data.status<=299){
//       console.log('ok');
//         } else {
//             console.log('fail');
//         } 
//     }
//   );

// export const getLinkStatus = (arrayLinks) => {
//       const arrayStatusLinks = arrayLinks.map((e)=> fetch(e.href).then(data =>{   
//                 // const arrayPropertiesStatus = {
//                 //     href : e.href,
//                 //     text : e.text,
//                 //     file : e.file,
//                 //     status : data.status,
//                 //     message : (data.status>= 200 && data.status<=299) ? 'OK' : 'FAIL',
//                 // };
//                 // console.log(arrayPropertiesStatus);
//                 // return arrayPropertiesStatus;
            
//             })
//             .catch((error) => console.log(error));
//             )
            
//       return Promise.all(arrayStatusLinks);
      
//   };
// // console.log(getLinkStatus(getLinksWithProperties(rutaPrueba)));


export const getLinkStatus = (arrayLinks) => {
    const arrLink = arrayLinks.map((linkArr) => fetch(linkArr.href).then((res) => {
      //  console.log(res)
      const object = {
        href: linkArr.href,
        text: linkArr.text,
        file: linkArr.file,
        status: res.status,
        message: res.status  >=200 && res.status <=299 ? 'Ok' : 'Fail',
       
      };
      return object;
    }).catch((err) => err));
    return Promise.all(arrLink);
  };
  
//   console.log(getLinkStatus(getLinksWithProperties(rutaPrueba)));

export const checkIfItHasLinks = (pathLink) =>{
    const justURL = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    const urlLength = readFilePath(pathLink).match(justURL).length;
    return urlLength;
  }
  

