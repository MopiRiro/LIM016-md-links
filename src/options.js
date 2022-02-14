/* Función para obtener la cantidad total de los links(guardados como objetos en un array) encontrados en la ruta*/
export const totalLinks = (e) => {
    return `Total: ${e.length}`
}
// Función para obtener la cantidad de los links unicos(unique) encontrados en la ruta
export const uniqueLinks = (e) => {
    let eMap = e.map(item=>{
        return [item.href,item]
    });
    var eMapArr = new Map(eMap); // Pares de clave y valor
    let unique = [...eMapArr.values()]; // Conversión a un array
    return `Unique: ${unique.length}`
}
// Función para obtener la cantidad de los links rotos(broken) encontrados en la ruta
export const brokenLinks = (e) => {
    let eBroken = e.filter( item => item.message === 'Fail');
    return `Broken: ${eBroken.length}`
}


