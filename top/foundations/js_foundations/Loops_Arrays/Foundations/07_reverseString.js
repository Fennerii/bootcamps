function reverse(str){
    let split = str.split("");

    let reverse = split.toReversed();

    reverse.join(""); // can return this

    return reverse.join('');
}

function reverseLoop(str){
    let forwards = str;
    let backwards = "";

    for(let i = forwards.length -1; i >= 0; i--){
        backwards += forwards[i];
    }

    return backwards;
}


let str = "hello";

console.log(reverse(str));
console.log(reverseLoop(str));