let availableStock = [
    {
        category: 'iceCream',
        productName: 'vanila',
        numberInStock: 56,
        Price: 4500,
        productLocation: 'firstCorner',
        productDesc: 'it is a vanila icecream with a sweeting vanila flavour'
    },
    {
        category: 'iceCream',
        productName: 'strawBerry',
        numberInStock: 20,
        Price: 5500,
        productLocation: 'thirdCorner',
        productDesc: 'it is a strawberry icecream'
    },
    {
        category: 'iceCream',
        productName: 'coldStone',
        numberInStock: 6,
        Price: 7500,
        productLocation: 'secondCorner',
        productDesc: 'it is a coldStone icecream'
    },
    
]


console.log(availableStock[0]);
console.log(availableStock[1]);
console.log(availableStock[2]);

if (availableStock[0].numberInStock <= 5) {
    availableStock[0].numberInStock += 15;
    console.log(availableStock[0].numberInStock);
}else{
    availableStock[0].numberInStock -= 15;
    console.log(availableStock[0].numberInStock);
}

if (availableStock[1].numberInStock <= 5) {
    availableStock[1].numberInStock += 15;
    console.log(availableStock[1].numberInStock);
}else{
    availableStock[1].numberInStock -= 15;
    console.log(availableStock[1].numberInStock);
}

if (availableStock[2].numberInStock <= 15) {
    availableStock[2].numberInStock += 15;
    console.log(availableStock[2].numberInStock);
}else{
    availableStock[2].numberInStock -= 15;
    console.log(availableStock[2].numberInStock);
}