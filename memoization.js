const addThreeNums = (a, b, c) => a + b + c;

console.log(addThreeNums(1, 2, 4));

const memo = (fn) => {
  const cache = {};
  return (...args) => {
    const str_args = JSON.stringify(args);
    if (str_args in cache) {
      console.log("Getting from cache");
      return cache[str_args];
    } else {
      console.log("Computing the ans");
      const calc = fn.apply(this, args);
      cache[str_args] = calc;
      return calc;
    }
  };
};

const add = memo(addThreeNums);

console.log(add(1, 2, 4));
console.log(add(1, 2, 4));
