Array.prototype.filter = function (callbackFn) {
  let outputArr = [];

  this.forEach((el, index) => {
    if (callbackFn(el, index, this)) {
      outputArr.push(el);
    }
  });

  return outputArr;
};

console.log([1, 2, 4, 5, 6, 7].filter((el) => el % 2 == 0));
