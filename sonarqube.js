// Duplicate code
function add(a, b) {
    return a + b;
}

function sum(a, b) {
    return a + b;
}

// Unused variable
let unusedVar = 42;

// Too many parameters
function processOrder(orderId, userId, productId, quantity, price, discount, tax) {
    // Long function
    let total = price * quantity;
    if (discount > 0) {
        total -= discount;
    }
    if (tax > 0) {
        total += tax;
    }
    // Magic number
    if (total > 1000) {
        console.log("Large order");
    }
    return total;
}

// Complex conditionals and inconsistent return
function checkUser(user) {
    if (user && user.status === 'active' && user.age > 18 && user.role !== 'guest') {
        return true;
    } else if (user && user.status === 'pending') {
        // Empty catch block
        try {
            processOrder();
        } catch (e) {}
    }
    // No return in this branch
}

// Deprecated API & console statement in production code
document.write("Hello, world!");
console.log("Debug info");
