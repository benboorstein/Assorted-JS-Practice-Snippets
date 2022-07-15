// Note: I've posted this on Dev

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// A note on recursive functions from https://www.freecodecamp.org/news/understanding-recursion-in-javascript/:
// "...the first step [is] to tell the function when to stop calling itself. Then we [tell] it what to do when it calls itself."

// Remember that "control" "goes down" until it hits the "base condition", and then it "changes direction"/"goes back up"/"unwinds".



// Please note that I do not have a great understanding of all of the examples presented here. Some of them I get, and others are for me to study some more. 



// An example from https://eloquentjavascript.net/03_functions.html
function power(base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}
console.log(power(2, 3)) // 8


// The following is my understanding of it, whether illustrated correctly or not quite

// The original
function power(base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}

// The original but with the numbers for "base" and "exponent" plugged in
function power(2, 3) {
    if (exponent === 0) { // No
        return 1 // N/A
    } else {
        return 2 * power(2, 3 - 1)
    }
}

    function power(2, 2) {
        if (exponent === 0) { // No
            return 1 // N/A
        } else {
            return 2 * power(2, 2 - 1)
        }
    }

        function power(2, 1) {
            if (exponent === 0) { // No
                return 1 // N/A
            } else {
                return 2 * power(2, 1 - 1) // On the "way back up"/"unwind" (i.e., AFTER the below iteration is done), the 1 from the iteration below is returned to THIS line's function call, so this line effectively becomes "return 2 * 1". The "2 * 1" here equals 2 of course. In the iteration above, 2 is plugged in for "power(2, 2 - 1)", so that line effectively becomes "return 2 * 2", which gives us 4 of course. And it continues like so all the way "back up".
            }
        }

            function power(2, 0) {
                if (exponent === 0) { // Yes
                    return 1 // 1 // So, at this point, "control", having reached the "base condition" (which is the code that's on this line), "changes direction"/"goes back up"/"unwinds", and the 1 is returned to the function call above.
                }
            }



// A simple example
function factorial(x) {
    if (x === 0) { 
        return 1
    }
    else { 
        return x * factorial(x - 1)
    }
}
console.log(factorial(4)) // 24
// How it works:
// factorial(4) => 4 * factorial(3) => 3 * factorial(2) => 2 * factorial(1) => 1 * factorial(0) => 1
// Note: The 4 is "kept" and factorial(3) is run, and then from that the 3 is "kept" and factorial(2) is run, etc., until the base case.
// So, we're left with: 4 * 3 * 2 * 1 * 1



// And, the way of outlining the example just above can also be applied to the power(base, exponent) example at the top
function power(base, exponent) {
    if (exponent === 0) {
        return 1
    } else {
        return base * power(base, exponent - 1)
    }
}
console.log(power(2, 3)) // 8
// How it works:
// power(2, 3) => 2 * power(2, 2) => 2 * power(2, 1) => 2 * power(2, 0) => 1
// Note: The 2 is "kept" and power(2, 2) is run, and then from that the 2 is "kept" and power(2, 1) is run, etc., until the base case.
// So, we're left with: 2 * 2 * 2 * 1



// An example from Fun Fun Function
let countDownFrom = (num) => {
    if (num < 1) {
        return 1
    } else {
      console.log(num)
      countDownFrom(num - 1)
    }
}
console.log(countDownFrom(10)) // logs:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1



// Notice that, in the above example, the function call in the 'else' block is not actually returned (i.e., there's no 'return' keyword before it). With this in mind, note how if we add the 'return' keyword before 'countDownFrom(num - 1)' (as is done in the example just below) the '1' from the 'if' block gets returned. This is a reminder that the '1' from the 'if' block is actually returned to the function call in the 'else' block. So in order for this '1' to be returned, the function call in the 'else' block must be returned.
let countDownFrom = (num) => {
    if (num < 1) {
        return 1
    } else {
      console.log(num)
      return countDownFrom(num - 1)
    }
}
console.log(countDownFrom(10)) // logs:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 1



// An example from freeCodeCamp
let oddOrEven = (number) => {
    if (number === 0) {
        return 'Even'
    } else if (number === 1) {
        return 'Odd'
    } else {
        return oddOrEven(number - 2)
    }
}
console.log(oddOrEven(20)) // Even
console.log(oddOrEven(75)) // Odd
console.log(oddOrEven(98)) // Even
console.log(oddOrEven(113)) // Odd



// A challenge from freeCodeCamp
// "Write a program that reverses a string using recursion. Given the string 'freeCodeCamp' your program should return 'pmaCedoCeerf'."
function reverseString(str) {
    if (str.length === 0) {
        return ''
    } else {
        console.log(str)
        return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
    }
}
console.log(reverseString('freeCodeCamp')) // pmaCedoCeerf
// I think that the below is a correct illustration of what's returned:
// p + freeCodeCam
// pm + freeCodeCa
// pma + freeCodeC
// pmaC + freeCode
// pmaCe + freeCod
// pmaCed + freeCo
// pmaCedo + freeC
// pmaCedoC + free
// pmaCedoCe + fre
// pmaCedoCee + fr
// pmaCedoCeer + f
// pmaCedoCeerf



// An example from https://stackoverflow.com/questions/27415470/javascript-recursion-reverse-string
function reverse(str) {
    if (str.length === 0) {
        return ''
    } else {      
        return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
    }
}
console.log(reverse('abc')) // cba
// "c" + reverse("ab")
// "c" + ("b" + reverse("a"))
// "c" + ("b" + ("a" + reverse("")))     // ***Hits the 'base condition' of recursion***
// "c" + ("b" + ("a" + ""))              // ***Unwinding begins here***
// "c" + ("ba")
// "cba"



// Another example from https://eloquentjavascript.net/03_functions.html
function findSolution(target) {
    function find(current, history) {
        if (current == target) { // if (current === +target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1, '1')
}
console.log(findSolution(13)) // (((1 * 3) + 5) + 5)
/*
"Note that [the above] program doesn't necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all...To better understand how this function produces the effect we're looking for, let's look at all the calls to [the function named 'find'] that are made when searching for a solution for the number 13."

find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
*/