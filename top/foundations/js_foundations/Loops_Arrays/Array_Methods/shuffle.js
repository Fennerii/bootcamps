function Unique(arr){
    let filterarr = [];

    //for (const element of iterable){
    //}
        //item of what you're looping through
    for(name of arr){
        if(!filterarr.includes(name)){
            filterarr.push(name);
        }
    }

    return filterarr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(Unique(strings));