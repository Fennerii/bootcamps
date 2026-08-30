const repeatString = function (word, times) {

  if (times < 0) return "ERROR";

     let string = "";

    for (let i = 0; i < times; i++) {
       string += word; // storing string
     }

    return string;
};

console.log(repeatString('hey',3));