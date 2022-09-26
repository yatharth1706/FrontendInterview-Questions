// Example: {
//     A: "12",
//     B: 23,
//     C: {
//         P: 23,
//         O: {
//             L: 26
//         },
//         Q: [1,2]
//     }
// }

// Output: {
//     A: "12",
//     B: 23,
//     C.P: 23,
//     C.P.L: 26,
//     C.Q.0: 1,
//     C.Q.1: 2
// }

const obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 26,
    },
    Q: [1, 2],
  },
};

let finalObj = {};
const flattenObj = (obj, parent) => {
  for (let key in obj) {
    let value = obj[key];
    console.log(key, value);
    let finalKey = parent ? parent + "." + key : key;

    if (typeof value === "object") {
      flattenObj(value, finalKey);
    } else {
      console.log(finalKey, value);
      finalObj[finalKey] = value;
    }
  }
};

flattenObj(obj, "");
console.log(finalObj);
