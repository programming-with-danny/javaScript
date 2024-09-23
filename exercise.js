
let nationality = 'nigeria';
let age = 17;
let yearsOfExperience = 5;
let numberOfChildren = 5;
let plants = ['rice', 'cassava', 'beans'];
let basicSalary = 500;
let yearsOfWork = 29;
let salaryAftertax;

if (nationality == 'nigeria' && age < 16) {
    console.log('sorry, you are eligible');
}else{
    console.log('you are over age');
}

if (yearsOfExperience >= 5 && (plants[0]=='rice'&& plants[1]=='cassava' && plants[2]=='beans') && numberOfChildren <= 5){
    console.log(`you are a farmer with ${yearsOfExperience} of experience and ${numberOfChildren} childern`);
}else{
    console.log('please state your profession');
}

if (yearsOfWork > 25) {
    console.log(salaryAftertax = basicSalary - (basicSalary *5)/100);
}else{
    console.log(`your have worked for ${yearsOfWork} years, so you cannot pay tax`);
}

