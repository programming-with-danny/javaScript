let no1 = 20, no2 = 30, no3 = 50;
let myName = 'Nnanna';
let sum = (no1 + no2) / no3;

myName += ' John';

console.log(myName)

// no1 = no1 - 5;
//BODMAS
 console.log(`Sum = ${sum}`)
console.log(`Modulus ${no2 % no1}`)

no1++;
++no1;
// no1 = no1 + 1
no2 += 30;
no2 -= 30;
no2 *= 30;
no2 /= 30;

console.log(`No1 = ${no1}`)
console.log(`No2 = ${no2}`)

let A = 50, B = 30, C = 25, D = '30', E = 25;

console.log(A > B);
console.log(B < C);
console.log(B <= E);
console.log(C >= D);
console.log(C <= E);
console.log(B == D);
console.log(C != D);
console.log(D === B);
console.log(D !== B);
console.log(B != D);

//
let exam1 = !(!(B == C) && (C >= B) || (B == D || E < A))
let exam2 = !(B < C) || B <= E;
let exam3 = C >= D && C <= E;
console.log(exam1)
console.log(exam2)
console.log(exam3)

let m = 0;
(A > B ? m += 5 : m += 20);
console.log(m)

console.log(typeof m)
console.log(typeof m == 'number' ? 'Data is valid' : 'You must use a number');


let time = 2;
let gift;
if (time == 1) {
    gift = 'Rice'
} else {
    gift = 'Water'
}

// console.log(gift == undefined ? 'You dont have a gift' : 'Your gift is ' + gift)
console.log('Your gift is ' + gift)