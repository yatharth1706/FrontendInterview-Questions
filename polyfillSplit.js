let str = "asdf,asdfdd,wer23";

String.prototype.split = function (delimeter) {
  let arr = [];

  let temp = "";

  for (let i = 0; i < this.length; i++) {
    let char = this[i];

    if (char === delimeter) {
      arr.push(temp);
      temp = "";
    } else {
      temp += char;
    }
  }

  arr.push(temp);

  return arr;
};

console.log(str.split(","));
