function sortArrByCriteria(array) {
    let sortedArray = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArray.join("\n"));
}
sortArrByCriteria(['alpha',

    'beta',

    'gamma'])