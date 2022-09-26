// Flatten the array
// Example: [[[1,1], 2], 3,4,5] -> 1,1,2,3,4,5

const arr = [[[1, [1, 1]], 2, 3], [4, 5], 6];

let finalArr = [];
const flattenArr = (arr) => {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      finalArr.push(item);
    }
  }
};

flattenArr(arr);
console.log(finalArr);
