// Code your solution here
function findMatching(drivers, querey){
    return drivers.filter(driver => driver.toLowerCase() === querey.toLowerCase());
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.startsWith(query));
  }

  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
   
