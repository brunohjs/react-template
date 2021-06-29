module.exports = {
    group: (array, number) => {
        let newList = [];
        let aux = [];
        for(let i = 0; i < array.length; i++) {
            aux.push(array[i]);
            if (aux.length == number || i == array.length - 1) {
                newList.push(aux);
                aux = [];
            }
        }
        return newList;
    }
}