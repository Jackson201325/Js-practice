/*
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        console.log(this.color)
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This box number ' + this.position + ' and it is ' + this.color
            alert(str)
        })
    }
}

var unboundGetClick = box6.clickMe
console.log(unboundGetClick())

var boundGetClick = unboundGetClick.bind(box6)
console.log(boundGetClick())

var module = {
    x: 42,
    getX: function () {
        var x = function () {
            console.log(this.x)
        }()
        return this.x;
    }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
new Person('John').myFriends5(friends)
*/
/*
function Person(name) {
    this.name = name
}
/*
// ES5
Person.prototype.myFriends5 = function (friends) {
    
    var arr = friends.map(function (el) {

        return this.name + ' is friends with ' + el

    }.bind(this))
    console.log(arr)
}


new Person('John').myFriends5(friends)
*/
/*
// ES6
var friends = ['Bob', 'Jane', 'Mark'];

Person.prototype.myFriends6 = function (friends) {
    var arr = friends.map( (el) =>  `${this.name} is friends with ${el}`)
    console.log(arr)
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends6(friends)
*/

/*
// ES5
var john = ['John', 26];
//var name = john[0]
//var age = john[1]


// ES6
const [name, age] = ['John', 26]
console.log(name)
console.log(age)

const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

const {firstName, lastName} = obj
*/
/*
function calcAgeRetirement (year) {
    const age = new Date().getFullYear() - year

    return [age, 65 - age]
}

const [age2, retirement] = calcAgeRetirement(1995)
console.log(age2)
console.log(retirement) 

*/
/*
const boxes = document.querySelectorAll('.box');


//ES5
var boxesArray5 = Array.prototype.slice.call(boxes)

boxesArray5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue'
});

//ES6
var boxesArray6 = Array.from(boxes)
Array.from(boxes).forEach(cur => {
    cur.style.backgroundColor = 'dodgerblue'    
});

//ES5
for (var i = 0; i < boxes.length; i++) {
    if (boxesArray5[i].className === 'box blue' ) {
        continue
        
    }
    boxesArray5[i].textContent = 'I changed to blue'
}

//ES6
for (const el of boxesArray6) {
    if (el.className.includes('blue')) {
        continue
    }
     el.textContent = 'I changed to blue'
}

//ES5

var ages = [10, 20, 30, 40, 50, 60]

var full = ages.map(function(cur) {
    return cur >= 28
});

console.log(full)
console.log(full.indexOf(false))
console.log(ages[full.indexOf(true)])

ages.findIndex(cur => cur >= 18 )

*/
/*
function addFourAges (a, b, c, d) {
    return a + b + c + d
}

var sum = addFourAges(18, 19, 20, 21)
console.log(sum)

ages = [10, 11, 12, 13]
// ES5
var sum2 = addFourAges.apply(null, ages)
console.log('Second sum: ', sum2)

//ES6
console.log(addFourAges(...ages))

const familySmith = ['Jane', 'Jane', 'Mark']

const familyMiller = ['Mary', 'Bob', 'Ann']

const bigFamily = [...familyMiller, ...familySmith]

*/

//The spread operator is used in a function call and the rest parameter is used in a function argument var x = function (...[arrayName]) {}
/*
const question = new Map()
question.set('question', 'What is the official name of the latest major JavaScript version ?')
question.set(1, 'ES5')
question.set(2, 'ES6')
question.set(3, 'ES2015')
question.set(4, 'ES7')
question.set('correct', 4)
question.set(true, 'correct answer :D')
question.set(false, 'Wrong plz try again! D:')

console.log(question)
console.log(question.size)

//question.delete(4) Delets de entry number 4, starts with 0 
//question.has (4) verifyes if this exits
//question.clear() clears the whole map
if (question.has(4)) {
    //question.delete(4)
}

question.forEach((value, key) => {
    //console.log(`THis is ${key}, and it is set to ${value}`)
});
// returns all the entries if our question mark
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        //console.log(`Answer ${key}, ${value}`)
    }
}

//question.get(4) gets the key for 
const ans = parseInt(prompt('Write the correct answer'))

console.log(question.get(ans === question.get('correct')))
*/
/*
//ES5

//Function expression , function declaration
var Person5 = function(name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear - this.yearOfBirth
    console.log(age)
}

var john5 = new Person5('John', 1990, 'teacher')
*/

// ES6
/*
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
    }

    calculataAge() {
        var age = new Date().getFullYear - this.yearOfBirth
        console.log(age)
    }
}

const john6 = new Person6 ('John', 1990, 'teacher')
*/

/*
//ES5

//Function expression , function declaration
var Person5 = function (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = function () {
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
}


var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job)
    this.olympicGames = olympicGames
    this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype)

Athlete5.prototype.wonMedal = function() {
    this.medals ++
    console.log(this.medals)
}


const johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 20, 10)

johnAthlete5.calculateAge()
johnAthlete5.wonMedal()
*/
/*
//ES6

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
    }

    calculataAge() {
        var age = new Date().getFullYear() - this.yearOfBirth
        console.log(age)
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job)
        this.olympicGames = olympicGames,
        this.medals = medals
    }
    
    wonMedal() {
        this.medals++
        console.log(this.medals)
    }
} 

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10)
.3

johnAthlete6.wonMedal()
johnAthlete6.calculataAge()
*/
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end - of - year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town(forumla: number of trees / park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny / small / normal / big / huge.If the size is unknown, the default is normal

All the report data should be printed to the console.

    HINT: Use some of the ES6 features: classes*, subclasses*, template strings*, default parameters*, maps**, arrow functions*, destructuring, etc.

*/

/*

class Element {
    //All parks and street have name and year build 
    constructor(name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }
}

class Park extends Element {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear)
        this.numberOfTrees = numberOfTrees
        this.parkArea = parkArea
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 'Normal'){
        super(name, buildYear)
        this.length = length
        this.size = size
    }
    
    
}

const park1 = new Park('park1', 1991, 10000, 3000)
const park2 = new Park('park2', 1992, 30000, 1000)
const park3 = new Park('park3', 1993, 15000, 1200)
const park4 = new Park('park4', 1994, 20000, 2000)

let sizes = new Map()
sizes.set(100, 'Tiny')
sizes.set(200, 'Small')
sizes.set(300, 'Normal')
sizes.set(400, 'Big')
sizes.set(500, 'Huge')
sizes.set('Normal', 3)


const s1 = new Street('S1', 1990, 200, sizes.get(200))
const s2 = new Street('S2', 1991, 300)
const s3 = new Street('S3', 1992, 400, sizes.get(400))


let parks = [park1, park2, park3, park4]
let streets = [s1, s2, s3]

let avgParkDensity = (parks) => {
    let avgTDPark = 0
    parks.forEach(element => {
        avgTDPark = avgTDPark + (element.numberOfTrees / element.parkArea)
    })
    console.log(avgTDPark / parks.length)
    return avgTDPark / parks.length
}


let avgParkAgeF = (parks) => {
    let ageSum = 0 
    let today = new Date().getFullYear()
    parks.forEach(element => {
        ageSum = ageSum + (today - element.buildYear)
    }) 
    console.log(ageSum / parks.length)
    return ageSum / parks.length
    
}

let oldPark = (parks) => {
    let parkOneK = []
    parks.forEach(element => {
       if(element.numberOfTrees > 1000) {
           console.log(element.name)
       }
    });
}

let totalCoverage = (streets) => {
    let totalLength = 0
    streets.forEach(element => {
        totalLength = totalLength + element.length
    });
    console.log(totalLength)
}

totalCoverage(streets)
oldPark(parks)
avgParkAgeF(parks)
avgParkDensity(parks)
*/

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end - of - year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town(forumla: number of trees / park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny / small / normal / big / huge.If the size is unknown, the default is normal

All the report data should be printed to the console.

    HINT: Use some of the ES6 features: classes*, subclasses*, template strings*, default parameters*, maps**, arrow functions*, destructuring, etc.

*/
class Element {
    //All parks and street have name and year build 
    constructor(name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }
}

class Park extends Element {
    constructor(name, buildYear, numberOfTrees, parkArea) {
        super(name, buildYear)
        this.numberOfTrees = numberOfTrees
        this.parkArea = parkArea
    }

    treeDensity() {
        const density = this.numberOfTrees / this.parkArea
        console.log(density)
        return density 
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear)
        this.length = length
        this.size = size
    }

    classification() {
        sizes = new Map()
        sizes.set(100, 'Tiny')
        sizes.set(200, 'Small')
        sizes.set(300, 'Normal')
        sizes.set(400, 'Big')
        sizes.set(500, 'Huge')
    }
}

const allPark = [new Park('Park1', 1990, 10000, 200),
    new Park('Park2', 1991, 20000, 300),
    new Park('Park3', 1992, 30000, 400),
    new Park('Park4', 1993, 40000, 500),
]

const allStreet = [new Street('S1', 1990, 10000, 2),
    new Street('S1', 1990, 10000),
    new Street('S1', 1990, 10000,4),
]

function calcArray(arr) {
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];
}

function reportPark(p) {
    //calcualte density 
    p.forEach(element => {
        element.treeDensity()
    });

    //Avg age of each park 
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, aveAge] = calcArray(ages)
    console.log(aveAge)

    //parks with more than 1000 trees
    const i = p.map(el => el.numberOfTrees).findIndex(el => el > 20000)
    console.log(i)

}

function reportStreets(s) {
    s.forEach(el => {
        el.classification()
    });
}

reportPark(allPark)
