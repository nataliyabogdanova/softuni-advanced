function rotateArr(array, rotations) {
    let length = array.length;
    let effectiveRotations = rotations % length;

    let rotatedArray = array.slice(length - effectiveRotations).concat(array.slice(0, length - effectiveRotations));
    console.log(rotatedArray.join(' '));
}
rotateArr(['1',

    '2',

    '3',

    '4'],

    2)