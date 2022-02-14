// import {existPath} from './api.js';
// console.log(existPath('./pruebas'));
import colors from 'colors';
import {mdLinks} from "./md-links.js";
import { totalLinks, uniqueLinks, brokenLinks } from "./options.js";

// const rutaPrueba = './pruebas';
// const rutaPruebaFalla = './pruebas/...';
// const segundaRutaPrueba = './pruebas/subPrueba/subPrueba.md';


// getLinkStatus(getLinksWithProperties(rutaPrueba)).then((res)=> {
//     console.log(res);

// }).catch((e)=>console.log(e));

// export const totalLinks = (e) => {
//     return `Total: ${e.length}`
// }

// export const uniqueLinks = (e) => {
//     let eMap = e.map(item=>{
//         return [item.href,item]
//     });
//     var eMapArr = new Map(eMap); // Pares de clave y valor
//     let unique = [...eMapArr.values()]; // Conversión a un array
//     return `Unique: ${unique.length}`
// }

// export const brokenLinks = (e) => {
//     let eBroken = e.filter( item => item.message === 'Fail');
//     return `Broken: ${eBroken.length}`
// }

// mdLinks(rutaPrueba, {validate:true})
// .then((res)=> {
//     console.log(res);
//     console.log(totalLinks(res));
//     console.log(uniqueLinks(res));
//     console.log(brokenLinks(res));

// }).catch((e)=>console.log(e));


// const rutaPrueba = './pruebas';

export const optionValidateFalse = (path) => {mdLinks(path, { validate: false })
  .then(res => console.log(colors.yellow(res)))
  .catch(error => {
    console.log(error);
  })
};

// optionValidateFalse(rutaPrueba);
// console.log(optionValidateFalse(rutaPrueba));


export const optionValidateTrue = (path) => {mdLinks(path, { validate: true })
  .then(res => {
    console.log(res)})
  .catch(error => {
    console.log(error);
  })
};

// console.log(optionValidate(rutaPrueba));

export const optionStats = (path) => {mdLinks(path, {validate: true})
  .then( res => {
    console.log(colors.cyan(totalLinks(res)));
    console.log(colors.blue(uniqueLinks(res)));
  })
  .catch(error => {
    console.log (error);
  })
};

// console.log(optionStats(rutaPrueba));

export const optionStatsValidate = (path) => {mdLinks(path, {validate: true})
  .then( res => {
    console.log(colors.cyan(totalLinks(res)));
    console.log(colors.blue(uniqueLinks(res)));
    console.log(colors.magenta(brokenLinks(res)));
  })
  .catch(error => {
    console.log (error);
  })
};

// console.log(optionStatsValidate(rutaPrueba));