let car = {
    brand : "BMW",
    year : 1990
} 

function checkIfCarIsOld(carYear){
    carYear > 1990 ? false : true;
}

checkIfCarIsOld(car.year) ? console.log("Not old") : console.log("Old");