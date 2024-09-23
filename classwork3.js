function performOperation(operation, ...numbers) {
    let sum = 0;
    const subtract = numbers[0];
    let multiply = 1;
    const divide = numbers[0];
    for(let number of numbers){
        if (operation == 'add') {
            sum += number
        }
        return sum
    }
    for(let number of numbers.slice()){
        if (operation == 'subtract') {
            subtract -= number
        }
        return subtract
    }

    for(let number of numbers){
        if (operation == 'multiply') {
            multiply *= number
        }
        return multiply
    }
    for(let number of numbers){
        if (operation == 'divide') {
            divide /= number
        }
        return divide
    }

}
console.log(performOperation('subtract', 90,30));
