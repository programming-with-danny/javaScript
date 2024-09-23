function sumThreeNumbers(num1,num2,num3) {
    let sum = num1 + num2 + num3
    if (sum > 50) {
        return sum
    }else{
        return `the value of sum ${sum} is less than 50`;
    }
}
console.log(sumThreeNumbers(50,56,67));
console.log(sumThreeNumbers(5,36,6));