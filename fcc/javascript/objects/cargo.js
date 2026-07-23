function normalizeUnits(manifest){
  let nm = {...manifest};

  if (nm.unit === "lb"){
    nm.weight = nm.weight * 0.45;
    nm.unit = "kg";  
  }

  return nm;
}

function validateManifest(manifest){
  let errors = {}; //filling this in 

  //containerid
  if (!manifest.hasOwnProperty("containerId")){
    errors.containerId = "Missing";
  } else if (manifest.containerId === null || manifest.containerId === undefined || manifest.containerId < 1 || !Number.isInteger(manifest.containerId)){
    errors.containerId = "Invalid";
  }

  //destination 
  if (!manifest.hasOwnProperty("destination")){
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim().length === 0){
    errors.destination = "Invalid";
  }

  //weight
  if(!manifest.hasOwnProperty("weight")){
    errors.weight = "Missing";
  } else if(typeof manifest.weight !== "number"|| manifest.weight <= 0 || manifest.weight === null || manifest.weight === undefined || Number.isNaN(manifest.weight)){
    errors.weight = "Invalid";
  }

  //unit
  if(!manifest.hasOwnProperty("unit")){
    errors.unit = "Missing";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg"){
    errors.unit = "Invalid";
  }

  //hazmat
  if(!manifest.hasOwnProperty("hazmat")){
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean"){
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
    if(validateManifest(manifest).hasOwnProperty("containerId")) {
    const weight = normalizeUnits(manifest.weight);
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  } else if (validateManifest(manifest)) {
    console.log(`Validation success: ${manifest.containerId}`); 
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  }
}

console.log(normalizeUnits(
{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}
))

console.log(validateManifest({
  containerId: 0, 
  destination: 405, 
  weight: -84, 
  unit: "pounds", 
  hazmat: "no" })); 
