/*

// Function constructor

var john = {
    name: 'John',
    yearOfBirth:1990,
    job: 'teacher'
}

var Person = function (name, yearOfBirth, job) {
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth)
}


var john = new Person ('John', 1990, 'Teacher')
var jane = new Person('Jane', 1969, 'designer')
var mark = new Person('Mark', 1948, 'retired')

john.calculateAge()
jane.calculateAge()
mark.calculateAge()
*/

/*
// Object.create

var personProto = {
    function () {
        console.log(2019 - this.yearOfBirth)
    }
}

var john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'teacher'

*/

/*
var year = [1995, 1945, 1932, 1994, 1992]

function arrayCalc(arr, fn) {
    var arrayRes =[]
    for (i = 0; i < arr.length; i++) {
        arrayRes.push(fn(arr[i]))
    }
    return arrayRes
}

function calculateAge(el) {
    return 2016 - el
}

function oldAsFuck(el) {
    return el >= 35
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return -1
    }
}

var ages = arrayCalc(year, calculateAge)
var oldFuckers = arrayCalc(ages, oldAsFuck)
var heartRates = arrayCalc(ages, maxHeartRate)
console.log(ages)
console.log(oldFuckers)
console.log(heartRates)
*/

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', what is UX')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what do you teach')
        }
    } else {
        return function (name) {
            console.log(name + ', what do you do? ')            
        }
    }
}

interviewQuestion('designer')('Mark')
interviewQuestion('teacher')('John')
interviewQuestion('nothing')('Jane')
*/

/*
(function (luck) {
    var score = Math.random() * 10
    console.log(score >= 5 - luck)
})(5)
*/

/*
function retirement(retirementAge) {
    var a = ' years left until retirement'
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth
        console.log ((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66)
var retirementGR = retirement(65)
var retirementPY = retirement(63)

retirementUS(1990)
retirementGR(1990)
retirementPY(1990)

/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ' what is UX ?')
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log(name + ', what do you teach ?')
        }
    } else {
        return function (name) {
            console.log(name + ', what do you do ?')
        }
    }
}
*/

/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ' what is UX ?')
        } else if (job === 'teacher') {
            console.log(name + ', what do you teach ?')
        } else {
            console.log(name + ', what do you do ?')
        }
    }
}

var designerA = interviewQuestion('designer')
var teacherA = interviewQuestion('teacher')
var randomA = interviewQuestion('nothing')
designerA('Mark')
teacherA('John')
randomA('Jackson')
*/

/*

var john = {
    name: 'John',
    age: 25,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Ladies and Gentleman my name is', this.name, ', I\'am a ' +
                this.teacher + ' I\'am  ' + this.age + ' years old. Enjoy your ' + 
                timeOfDay)
        } else if (style === 'friendly') {
            console.log('Hey! what\'s up my name is ' + this.name + ', I\'am ' + 
                this.age + ' years old, and I\'am a ' + this.job + '. Have a nice ' +
                timeOfDay)
        }
    }
}

john.presentation('friendly', 'afternoon')

var emily = {
    name: 'Emily',
    age: 54,
    job: 'designer'
}

john.presentation.call(emily, 'formal', 'morning')

var johnFormal = john.presentation.bind(john, 'formal')
johnFormal('evening')


var year = [1995, 1945, 1932, 1994, 1992]

function arrayCalc(arr, fn) {
    var arrayRes = []
    for (i = 0; i < arr.length; i++) {
        arrayRes.push(fn(arr[i]))
    }
    return arrayRes
}

function calculateAge(el) {
    return 2016 - el
}

function isFullAge(limit, el) {
    return el >= limit
}

var ages = arrayCalc(year, calculateAge)
var japanFullAge = arrayCalc(ages, isFullAge.bind(this, 20))

console.log(japanFullAge)
console.log(ages)
*/

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function () {
    function Question(question, answer, correct) {
        this.question = question
        this.answer = answer
        this.correct = correct
    }

    var q1 = new Question('How are you?', ['Fine', 'Not fine', 'ok'], 1)

    var q2 = new Question('What did you have for dinner', ['meat', 'soup', 'chicken'], 2)

    var q3 = new Question('What brand is my laptop', ['MSI', 'MacBook', 'Lenovo'], 0)

    questions = [q1, q2, q3]

    Question.prototype.displayQuestion = function () {
        console.log(this.question)

        for (i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i])
        }
    }

    Question.prototype.checkAnwer = function (answer, fun) {
        var sc
        if (answer === this.correct) {
            console.log('You answered correctly')
            sc = fun(true)
        } else {
            console.log('Try again')
            sc = fun(false)
        }

        this.displayScore(sc)

    }

    function score() {
        var sc = 0
        return function (correct) {
            if (correct) {
                sc++
            }
            return sc
        }
    }
    var keepScore = score()

    Question.prototype.displayScore = function (score) {
        console.log('-----------------------------')
        console.log('Your score is, ' + score)
    }

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length)

        questions[n].displayQuestion()

        var answer = (prompt('Select the correct answer'))

        if (answer !== 'exit') {

            questions[n].checkAnwer(parseInt(answer), keepScore)

            nextQuestion()
        }
    }
    nextQuestion()

})()
