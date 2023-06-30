/*
    Función para medir la profundidad de un array que se envia por parametro
*/

function depth ( array ) {
    return Array.isArray(array) ? 1 + Math.max(...array.map(depth)) :  0;
}

let response = depth([1,[2,[3, [4]]]]); // 4
console.log("🚀 ~ file: script.js:10 ~ response:", response)


