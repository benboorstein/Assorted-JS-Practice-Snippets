// Some JS practice that Robert and I talked about on one of our calls



// The below example is from here: https://eloquentjavascript.net/03_functions.html
const power = function(base, exponent) {
    let result = 1
    // Remember that this loop is basically doing what I'd do in my head: 1 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
    for (let count = 0; count < exponent; count++) {
      result *= base
    }
    return result
}
console.log(power(2, 10)) // 1024

// Arrow function version
const power = (base, exponent) => {
    let result = 1
    for (let count = 0; count < exponent; count++) {
      result *= base
    }
    return result
}
console.log(power(2, 10)) // 1024

// Note: "The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part UPDATES the state of the loop AFTER every iteration. In most cases, this is shorter and clearer than a while construct." (from here: https://eloquentjavascript.net/02_program_structure.html#c_9AxUm9n4M9)


// Create a function for each: * / + -

function product(n1, n2, n3) {
    return n1 * n2 * n3
}
product(4, 5, 7) // 140

function quotient(x, y) {
    return x / y
}
quotient(20, 4) // 5

function sum(num1, num2) {
    return num1 + num2
}
sum(4, 7) // 11

function difference(x1, x2) {
    return x1 - x2
}
difference(221, 42) // 179