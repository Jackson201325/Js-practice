/*
var sum = function (a, b) {
    return a + b
}

var subs = function (a, b) {
    return a - b
}

var mult = function (a, b) {
    return a * b
}
*/

percentages = [1, 2, 3, 4, 5, 6, 7]

aListOfNumbers = [10, 20, 30, 40, 50, 60, 80]

//THis works because they no matter what are the content of the two list if the calculations are made in order of one of the list
//Using index will be able to pair two values because of index

var calc = function(list) {
    for ( i = 0; i < list.length; i++) {
        whatIsWhat(list[i], i)
    }
}

var whatIsWhat = function(current, index) {
    if (percentages[index] > 0) {
        console.log('The Percentage ' + percentages[index] + ',is in the index: ', index)
        console.log('This is the current, also the element which is passing in the aListOfNumber: ' + current)
    } else {
        console.log('!! the percentage smaller than 0 is: ', percentages[index])
    }
}

calc(aListOfNumbers, whatIsWhat)