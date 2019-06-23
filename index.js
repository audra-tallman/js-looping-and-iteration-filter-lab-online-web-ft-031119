function findMatching (list, name) {
  return list.filter(function (driverName){
    return driverName.toLowerCase() ===name.toLowerCase ()
  });
}


function  myFuzzyMatch (list, partialName) {
  let lengthOfName =  partialName.length;
  return list.filter(function(driverName){
    return driverName.slice(0, lengthOfName) === partialName
  })
}