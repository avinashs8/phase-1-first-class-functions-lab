// Code your solution in this file!
const names = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers (parameter){
    return parameter.slice(0,2)
}

function returnLastTwoDrivers (parameter){
    return parameter.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function (price){
        return multiplier * price
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (names, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(names)
}