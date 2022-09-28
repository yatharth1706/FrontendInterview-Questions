const ARGS_LEN = 5;
const sum = (...args) => {
  if (args.length === ARGS_LEN) {
    return args.reduce((cur, prev) => cur + prev);
  } else {
    const recursiveFn = (...args2) => {
      args = args.concat(args2);
      if (args.length == ARGS_LEN) return args.reduce((cur, prev) => cur + prev);
      else return recursiveFn;
    };
    return recursiveFn;
  }
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1, 2)(3, 4)(5));
console.log(sum(1)(2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));
