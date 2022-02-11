// import {existPath} from './api.js';
// console.log(existPath('./pruebas'));
import {mdLinks} from "./md-links.js";

const rutaPrueba = './pruebas';
const rutaPruebaFalla = './pruebas/...';
const segundaRutaPrueba = './pruebas/subPrueba/subPrueba.md';


// getLinkStatus(getLinksWithProperties(rutaPrueba)).then((res)=> {
//     console.log(res);

// }).catch((e)=>console.log(e));

export const totalLinks = (e) => {
    return `Total: ${e.length}`
}

export const uniqueLinks = (e) => {
    let eMap = e.map(item=>{
        return [item.href,item]
    });
    var personasMapArr = new Map(eMap); // Pares de clave y valor
    let unique = [...personasMapArr.values()]; // Conversión a un array
    return `Unique: ${unique.length}`
}

export const brokenLinks = (e) => {
    let eBrokem = e.filter( item => item.message === 'Fail');
    return `Broken: ${eBrokem.length}`
}

// mdLinks(rutaPrueba, {validate:true})
// .then((res)=> {
//     console.log(totalLinks(res));
//     console.log(uniqueLinks(res));
//     console.log(brokenLinks(res));

// }).catch((e)=>console.log(e));

