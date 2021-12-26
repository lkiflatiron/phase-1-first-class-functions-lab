// Code your solution in this file!
const returnFirstTwoDrivers = (aryDrivers) => {
  return aryDrivers.length >= 2 ? aryDrivers.slice(0,2) : [];
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