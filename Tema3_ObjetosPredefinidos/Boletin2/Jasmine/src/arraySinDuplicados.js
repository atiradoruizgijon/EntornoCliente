function arraySinDuplicados(array) {
    if (array == undefined) throw new Error("No has pasado ningún array.");
    if (!array instanceof Array) throw new Error("El argumento pasado no es un array.");
    
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'number') throw new Error("El array contiene datos que no son números.");
        if (array.includes(array[i], i + 1)) array[i] = undefined;
    }
    // Para no ordenarlo por String:
    array.sort((a, b) => { return a - b; });

    while (array.includes(undefined)) array.pop();
            
    return array;
}