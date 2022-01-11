// Code your solution in this file!

aryDrivers["Max", "Joe", "Jenny", "Jim"]
const returnFirstTwoDrivers = (aryDrivers) => {
  const aryd = aryDrivers.slice(0,2)
  return aryd
}

const returnLastTwoDrivers = (aryDrivers) => {
  if (aryDrivers.length >= 2) {
    return aryDrivers.slice(-2)
  }
  return []; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
  return (fare) => num * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(aryDrivers, cb) {
  return cb(aryDrivers)
}