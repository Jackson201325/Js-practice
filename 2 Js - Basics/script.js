/****************************
 * Variables and data types
 */

/* var firstName = 'John'
console.log(firstName)

var lastName = 'Smith'
var age = 25

var fullAge = true
console.log(fullAge)

var job
console.log(job)

job = 'Teacher'
console.log(job)
*/

/****************************
 * Variables mutation and type coercion 
 */

/***************************** 
var firstName = 'John'
var age = 28

// Type Coercion
console.log(firstName + ' ' + age)

var job, isMarried 
job = 'teacher'
isMarried = false


alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' +  isMarried)

// Variable mutation
age = 'twenty eight'
job = 'driver'

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ? ' +  isMarried)

var lastName = prompt('What is his last name ?')
console.log(firstName + ' ' + lastName)

*/


/*
Mark and John are trying to compare their BMI, which is 
calculated using the formula BMI = mass /height^2,

1.  Store Mark's and John's mass and height in variables
2.  Calculate their body mass
3.  Create a boolean variable contaiing information about 
whether Mark has a higher BMI than John.
4.  Print a string to the console containing the variable from
step 3 ( Is Mark's BMI higher than John's? true")
*/

/*
var nameJohn1 = 'John'
var nameMark2 = 'Mark'

var bimJohn1, bimMark2, heightJohn1, massJohn1, heightMark2, massMark2

heightJohn1 = 180
massJohn1 = 88

height2 = 190
mass2 = 88

bimJohn1 =  massJohn1 / (heightJohn1^2)
bimMark2 =  massMark2 / (heightMark2^2)

console.log (`Is ${nameMark2}'s BMI higher than ${nameJohn1}'s? ${bimMark2 > bimJohn1}`)

*/

/*
var firstName = 'John'
var civilStatus = 'Single'

if (civilStatus === 'Married') {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' will hopefully marry soon')
}

*/
/*
var firstName = 'John'
var age = 16

age < 18 ? console.log(firstName + ' drink juice') 
: console.log(firstName + ' drink beer')

var drink = age < 18 ? 'juice' : 'beer'

var job = 'teacher'

switch (job) {
    case 'teacher':
        console.log('hu')
        break
    case 'driver':
        console.log('hu2')
        break
}
*/

/*
John and Mike both play basketball in different
teams. In the latest 3 games, John's team socred 89,
120 and 103 points, while Mike's team scored 116, 94
and 123 points

1.  Calculate the averga score for each team
2.  Decide which team wins in average (highest 
    average score), and print the winner to the console 
    Also include the acerage score in the input

3.  Then change the scores to show different winners. 
    Dont forget to take into account there might be a 
    draw

4.  EXTRA: Mary also plays basketball, and her team 
    scored 97, 134 and 105 points. Like before log the
    average winner to the console. HINT
5. Like before, change the socres to generate 
    different winners, kepping in mid there might be
    draws.
*/
/*
var teamMikeAVG = 1
var teamJohnAVG = 1
var teamMaryAVG = 1

if ( teamMikeAVG > teamJohnAVG && teamMikeAVG > teamMaryAVG) {
    console.log(`The winner is Mike averaging ${teamMikeAVG}`)
} else if (teamJohnAVG == teamMikeAVG == teamMaryAVG) {
    console.log (`It was a draw with all team averaging ${teamMikeAVG}`)
} else if (teamJohnAVG > teamMikeAVG && teamJohnAVG > teamMaryAVG){
    console.log(`THe winner is John averaging ${teamJohnAVG} `)
} else if (teamMaryAVG > teamMikeAVG && teamMaryAVG > teamJohnAVG) {
    console.log(`The winner is Mary averaging ${teamMaryAVG}`)
}

*/
 
/**********************************************
 *  Funciton statetement and expressions
 */

 /***********************************
  * 
      var whatDoYouDo = function(job, firstName) {
          switch(job) {
              case 'teacher':
                  return firstName + ' teaches how to code'
              case 'driver':
                  return firstName + ' drives a cab in Lisbon'
              case 'designer':
                  return firstName + ' designs beautiful webistes'
              default:
                  return firstName + ' does something else'
          }
      }
      
      console.log(whatDoYouDo('teacher', 'John'))
      
      console.log(whatDoYouDo('designer', 'Jane'))
      
      console.log(whatDoYouDo('retired', 'Mark'))
  * 
  */

  /***********************************
   * Arrayss
   */
/*
var names = ['John', 'Mark', 'Jane']
var years = new Array(19,12,34)

// console.log(names[2])
// console.log(names.length)

// Mutate array Data
// console.log(names)
// names[1] = 'Ben'
// names[names.length] = 'Mary'
// console.log(names)

// Different data type
var john = ['John', 'Smith', 1998 , 'teacher', false]
console.log(john)

john.push('blue')
john.unshift('Mr')
console.log(john)

john.pop()
console.log(john)

john.shift()
console.log(john)

console.log(john.indexOf(false))

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer' :
'John is a Designer'
console.log(isDesigner)

*/
 /***************************************************
  * John and his family went on a holiday and
  * went to 3 different restaurants the bills 
  * were 124, 48 and 268
  * 
  * To tip the waiter a fair amount, John created a 
  * simple tip calculator (as a function). He likes 
  * to tip 20% of the bill when the bill is less than 
  * 50 15% whenthe bill is between 50 and 200 and 10 
  * if the bill is 200 or more
  * 
  * In the end, John would like to have 2 arrays:
  * 1) Containing all three tips
  * 2) Containning all three final paid amount
  */
/*************************
 * 
 bills = [124, 48, 268]
 payments = []
 bills.forEach(bill => {
     console.log(bill)
     if (bill < 50) {
         percentage = 1.2         
     } else if (bill >= 50 && bill < 200) {
         percentage = 1.15        
     } else {
         percentage = 1.1               
     }    
     return payments.push(percentage * bill)   
 });
 console.log(payments)
 * 
 */

/*

var Total = []


function tipCalc (bill) {
    if (bill < 50) {
        totalPayment = bill * 1.2
        payments.push(totalPayment)
    } else if (bill >= 50 && bill < 200) {
        totalPayment = bill * 1.15
        payments.push(totalPayment)
    } else {
        totalPayment = bill * 1.1
        payments.push(totalPayment)
    }    
}

console.log(tipCalc(124))
console.log(tipCalc(48))
console.log(tipCalc(268))

switch(bill) {
        case bill < 50:
            paidAmount = bill * 1.2
            console.log(paidAmount)
        case bill >= 50 && bill < 200:
            paidAmount = bill * 1.15
            console.log(paidAmount)
            return paidAmount
        case bill >= 200:
            paidAmount = bill * 1.1
            console.log(paidAmount)
            return paidAmount

        }
*/

/****************************
 * Object and Properties
 */
/*
var john = {
    firstName: 'John', // property called firstName
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName)
console.log(john['lastName'])

var x = 'birthYear'

console.log(john[x])

john.job = 'designer'
john['isMarried'] = true
console.log(john)

*/

/************************
 * Object and Methods
 */
/*
var john = {
    firstName: 'John', // property called firstName
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () { // method called function
        this.age = 2018 - this.birthYear // = john.birthYear 
    }
}
// var age = john.calcAge()
// john.age = age

//john.age = john.calcAge()

john.calcAge()

console.log(john)
*/

/* 
Let's remember the first coding challenge where Mark and John
compared their BMIs. Let's now implement the same fuctionality 
with object and methods.

1.  For each of them, create an object with properties for their 
full name, mass and height
2.  Then add a method to each objecto to calculae hte BMI. Savw 
the BMI to the object and also return it from the method
3.  In th end, log to theocnsole who has the highes BMI. Dont forget 
they might have the same BMI
*/

/*

var mark = {
    fullname: 'Mark',
    height: 180,
    mass: 80,
    calcBMI: function () {
        return this.mass / (this.height ^ 2)
    }
}

var john = {
    fullname: 'John',
    height: 190,
    mass: 1000,
    calcBMI: function () {
        return this.mass / (this.height ^ 2)
    }
}

var markBMI = mark.calcBMI()
var johnBMI = john.calcBMI()

if (markBMI > johnBMI) {
    console.log(mark.fullname + "'s BMI is higher: ", markBMI)
} else if (markBMI < johnBMI) {
    console.log(john.fullname + "'s BMI is higher: ", johnBMI)
} else {
    console.log("Its a draw", markBMI)
}
*/

/*

var john = ['John', 'Smith', 1990, 'designer', 
'false', 'blue']

x = john.length
while (x >= 0) {
    x--
    console.log(john[x])    
}
*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


var newMark = {
    fullName: "Mark Miller",
    billValues: [77, 375, 110, 45],
    calcTotal: function() {
        this.totalPaid = []
        this.tipAmount = []
        function pushTotalPaid(list, billValue, percentage){
            list.push(billValue * (1 + percentage))
        }
        function pushTipAmunt(list, billValue, percentage) {
            list.push(billValue * (percentage))
        }
        for (i = 0; i < this.billValues.length ; i++) {
            if (this.billValues[i] < 100) {
                percentage = 0.2
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            } else if (this.billValues[i] >= 100 && this.billValues[i] < 300) {
                percentage = 0.1
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            } else {
                percentage = 0.25
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            }
        }
        return this.totalPaid, this.tipAmount

    }
}


var newJohn = {
    fullName: "John Smith",
    billValues: [124, 48, 268, 180, 42],
    calcTotal: function() {
        this.totalPaid = []
        this.tipAmount = []
        function pushTotalPaid(list, billValue, percentage){
            list.push(billValue * (1 + percentage))
        }
        function pushTipAmunt(list, billValue, percentage) {
            list.push(billValue * (percentage))
        }
        for (i = 0; i < this.billValues.length ; i++) {
            if (this.billValues[i] < 50) {
                percentage = 0.2
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            } else if (this.billValues[i] >= 50 && this.billValues[i] < 200) {
                percentage = 0.15
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            } else {
                percentage = 0.1
                pushTotalPaid(this.totalPaid, this.billValues[i], percentage)
                pushTipAmunt(this.tipAmount, this.billValues[i], percentage)
            }
        }
        return this.totalPaid, this.tipAmount
    },
}
console.log(newJohn.calcTotal())
console.log(newMark.calcTotal())

function calcAVG (bills) {
    var sum = 0
    for(i = 0; i < bills.length; i++) {
        sum = sum + bills[i]
    }
    
    return sum/ bills.length
}

newJohn.average = calcAVG(newJohn.tipAmount)
newMark.average = calcAVG(newMark.tipAmount)

console.log(newJohn)
console.log(newMark)

if (newJohn.average > newMark.average) {
    console.log("John tips better")
} else {
    console.log("Mark tips better")
}

/*
billValues = newMark.billValues
console.log(calcTotal(billValues))

newJohn.average = function(){
    totalJohn = 0 
    for (i = 0; i < newJohn.tipAmount.length; i++) {
        totalJohn = newJohn.tipAmount[i] + totalJohn
    }
}

newMark.average = function() {
    totalTip = 0
    function calcTipAVG(){
        calcTotal.tipAmount.forEach(tip => {
            totalTip = tip + totalTip
        });
        return totalTip/(calcTotal.tipAmount.length)
    }
}

console.log(newMark)
console.log(newJohn)
billValues = newMark.billValues
console.log(calcTotal(billValues))
*/
