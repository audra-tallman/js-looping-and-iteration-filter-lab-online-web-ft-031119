function findMatching () {
  return list.filter(function (driverName){
    return driverName.toLowerCase() ===name.toLowerCase
  })
}
