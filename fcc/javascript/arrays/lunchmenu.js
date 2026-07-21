const lunches = [];

function addLunchToEnd(lunches,String){
    lunches.push(String);
    console.log(String + " added to the end of the lunch menu.");
    
  return lunches; 
}

function addLunchToStart(lunches,String){
  lunches.unshift(String)
  console.log(String + " added to the start of the lunch menu.")

  return lunches;
}

function removeLastLunch(lunches){
  let pop = lunches.pop();
  if (lunches.length == 0){
    console.log("No lunches to remove.")
  } else {
    console.log(`${pop} removed from the end of the lunch menu.`)
  }
  return lunches;
}

function removeFirstLunch(lunches){
  let pop = lunches.shift();
  if (lunches.length == 0){
    console.log("No lunches to remove.");
  } else {
    console.log(`${pop} removed from the start of the lunch menu.`)
  }
  return lunches;
}

function getRandomLunch(lunches){
  if (lunches.length == 0){
    console.log("No lunches available.");
  } else {

    let rdmIndex = Math.floor(Math.random() * lunches.length);
    let selection = lunches[rdmIndex];

    console.log("Randomly selected lunch: " + selection);
  }

  return lunches;
}

function showLunchMenu(lunches){
  if(lunches.length ===0){
    console.log("The menu is empty.")
  }else {console.log(`Menu items: ${lunches.join(", ")}`)}
}

showLunchMenu(["Greens", "Corns", "Beans"]);
showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])
