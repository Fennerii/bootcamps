function camelize(str) {
  const split = str.split("-");


  const changes = split.map(function(word,index){ //can put a function in map
    if(!word){
        return "";
    }

    if(index === 0){
        return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });

  return changes.join("");

}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));   
console.log(camelize("-webkit-transition")); 
