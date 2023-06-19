console.log("------> Find duplicate <------");
const number = [1, 2, 3, 4, 2, 3, 5, 7, 8, 0, 6, 0, 2];

const duplicates = number.filter(findDuplicate);

function findDuplicate(value, index, array) {
    return (array.indexOf(value) !== index);
    //let value = 2
    //array.indexOf(2) it will return first match index = 1
    //In case of 4 index, array.indexOf(2) = 1 and index = 4, means duplicate detected.
}

console.log(duplicates);