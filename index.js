let no1 = 20, no2 = 30, no3 = 50;
console.log(no1)
console.log(no2)
console.log(no3)

let hoursWorked = 5;
let arrivalTime = 7;
let church = 'Eternal'
let yearOfBirth = 1999;
let firstname = 'john'
let basicSalary = 1000;

console.log(hoursWorked > 8);

if (hoursWorked > 8) {
    basicSalary += ((hoursWorked - 8) * 100)
}
console.log(arrivalTime >= 7 && arrivalTime <= 10);

if(arrivalTime >=7 && arrivalTime <=10){
    console.log('you just won a branded t-shirt');
    console.log(`your arrival time is ${arrivalTime} , so you just won a branded t-shirt`);
}

let message;
if(arrivalTime >=7 && arrivalTime <=10){
    console.log(message='you just won a branded t-shirt');
}