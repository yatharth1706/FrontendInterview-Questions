// Create a polyfill of map function

Array.prototype.map = function (callbackFn) {
  let outputArr = [];

  this.forEach((element, index) => {
    outputArr.push(callbackFn(element, index, this));
  });

  return outputArr;
};

console.log([1, 2, 3, 4].map((e) => 10 * e));
