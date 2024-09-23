let restaurantMenu = [
    {
        foodName: 'rice',
        price: 3500
    },
    {
        foodName: 'yam',
        price: 1700
    },
    {
        foodName: 'Pizza',
        price: 4000
    },
    {
        foodName: 'Pasta',
        price: 1500
    },
    {
        foodName: 'soup',
        price: 2500
    },
    {
        foodName: 'Burger',
        price: 1000
    },
]

let orders = [];
function takeCustomerOrder(customerId, dishNames) {
const order = {
    customerId: customerId,
    dishes: [],
    total: 0
};
for (let i in dishNames) {
    const dishName = dishNames[i];
    let dishFound = false;
    for (let dish in restaurantMenu) {
        if (restaurantMenu[dish].foodName == dishName) {
            order.dishes.push(restaurantMenu[dish]);
            dishFound = true;
            break;
        }
    }
    if (!dishFound) {
        return `Dish "${dishName}" is not available on the menu.`;
    }
}
orders.push(order);
return `Order successfully taken for Customer ID: ${customerId}`;
}

function calculateCustomerTotalOrder(customerId) {
let total = 0;
for (let i in orders) {
    if (orders[i].customerId == customerId) {
    for (let j in orders[i].dishes) {
        total += orders[i].dishes[j].price;
    }
    orders[i].total = total;
    return total;
    }
}
return `Order for Customer ID: ${customerId} not found.`;
}


function showCustomerOrder(customerId) {
let message = '';
for (let i in orders) {
    if (orders[i].customerId === customerId) {
        message += `Order Summary for Customer ID: ${customerId}\nDishes ordered:\n`;

  
        for (let j in orders[i].dishes) {
            message += `- ${orders[i].dishes[j].foodName}: N${orders[i].dishes[j].price}\n`;
    }

        const total = calculateCustomerTotalOrder(customerId);
        message += `Total Bill: N${total}`;
        return message;
    }
}


return `Order for Customer ID: ${customerId} not found.`;
}
  

console.log(takeCustomerOrder(1, ["Pasta", "Burger", "rice"]));
console.log(takeCustomerOrder(2, ["Pizza", "rice"]));
console.log(takeCustomerOrder(3, ["Burger", "yam",]));


console.log(showCustomerOrder(1)); 
console.log(showCustomerOrder(2)); 
console.log(showCustomerOrder(3)); 
