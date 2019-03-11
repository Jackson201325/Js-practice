
// BUDGET CONTROLLER
var budgetController = (function () {

    // The function constructor for expense
    var Expense = function (id, description, value) {
        this.id = id
        this.description = description
        this.value = value
        this.percentage = -1
    }

    // Calculates the percentage it is a method of the expense function constructor that manipulates its in data and stores it in the percentage propertyu 
    Expense.prototype.calcPercentage = function (totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percentage = -1
        }
    }

    // Get the percentage the first prototyope just calculates the percentage and this one returns that data
    Expense.prototype.getPercentage = function () {
        return this.percentage
    }

    // The function constructor for income
    var Income = function (id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    // A function that calculate the total in expense and income
    var calculateTotal =  function (type) {
        var sum = 0

        //The selection of the respective type either income or expense and a for each item in the array will be sum all together
        data.allItems[type].forEach(function(t) {
            sum = sum + t.value
        })

        //Assigsn the total sum of a certain type income or expense equals to the the total array  
        data.totals[type] = sum 
    }
    // The data structure  where things are going to be stored
    var data = {

        // Where the expense and income object will be stored respectively
        allItems : {
            exp: [],
            inc: []
        },

        totals: {
            exp: [],
            inc: []
        }, 
        
        budget: 0,
        percentage: -1
    }
    
    return {

        // Creates and item that will need 3 arguments which will be stored in the input var 
        addItem: function (type, des, val) {
            var newItem, newID
            
            // If the array is empty
            if ( data.allItems[type].length > 0) {
                
                // Creates an id by adding the last integer in the array,  one
                newID = data.allItems[type][data.allItems[type].length - 1].id + 1 

            } else { 
                newID = 0
            }
            
            // Types comes from 
            if ( type === 'exp') {
                newItem = new Expense(newID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(newID, des, val)
            }

            // Push it into our data structure
            data.allItems[type].push(newItem)

            //Return the new item
            return newItem
        },

        deleteItem: function (type, id) {
            var ids, index

            // id = 6
            // data.allitems[type][id]
            // ids = [1, 2, 4, 6, 8]
            // index = 3


            // Return in a array called ids where al the current.id lives 
            ids = data.allItems[type].map(function(current) {
                
                return current.id
            })
            //ids is an array of id and index is equal to the index of a id in the array ids
            index = ids.indexOf(id)
    

            if (index !== -1) {
                data.allItems[type].splice(index,  1)
            }
        },

        calculateBudget: function () {

            //Create total income and expense
            calculateTotal('inc')
            calculateTotal('exp')

            //Calculate the budget
            data.budget = data.totals.inc - data.totals.exp

            //Calculate percentage
            if (data.totals.inc > 0) {
                
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            } else {
                data.percentage = -1
            }
        },

        // Calculate the percentage of each item in the exp array 
        calculatePercentages: function () {

            // For each item in the exp array apply the calcPercentage function 
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc)
            })
            console.log('Exp array: ', data.allItems.exp)
        },

        // Gets all the percentage of each item in the exp array but now using map(we want to return something and return something) we can store it in a  variable so we can return all the calculated percentages in a array  
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(cur) {
                return cur.getPercentage()
            })
            console.log('allPerc: ', allPerc)
            //An array that has all the percentages
            return allPerc
        },

        //Return s a function that contains the budget, percentage, total income and expense 
        getBudget:function () {
            return {
                budget : data.budget,
                percentage : data.percentage,
                totalIncome : data.totals.inc,
                totalExpense : data.totals.exp
            }
        },
       
        testing: function () {
            console.log(data)
        }
    }

})()


// UI CONTROLLER
var UIController = (function () {

    // Then name of the HTML tags 
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeList: '.income__list',
        expenseList: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container:'.container',
        itemPercentage: '.item__percentage',
        dateLabel: '.budget__title--month'
    
    }
    // Formats the way we see the numbers
    var formatNumber = function (num, type) {
        var numSplit, int, dec
        // + or - before the number, exactly 2 decimal points comma separaing the thousand points
        // 23010.454 -> 2,310.46

        // Creates the absolute value of the number 
        num = Math.abs(num);

         // Leave only two number after the decimal
        num = num.toFixed(2)

        // splits the string number -using .as the separator, into an array called numSplit  
        numSplit = num.split('.')

        // int will wqual the first part of the array 
        int = numSplit[0]

        //Sets the p[osition of the commas
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3) //input = 12323 output = 12,323
        }

        // dec wil equal the second part of the num Split
        dec = numSplit[1]


        return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec
    }

    // Some wierd shit happenning 
    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i)
        }
    }

    return  {

        // Gets the input from the UI 
        getInput: function () {
            return {                
                type: document.querySelector(DOMstrings.inputType).value, // Will be eigher inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        // This function recieves two parameter the first one an object that is going to be newItem created in  var addCtrlItem = function () { and the input.type 
        addListItem: function (obj, type) {
            var html, newHtml, element

            // If input.type = inc which was extracted from the html type: document.querySelector(DOMstrings.inputType).value replace some html with placeholders
            if (type === 'inc') {
                element = DOMstrings.incomeList
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expenseList
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div >'
            }


            //Replace placeholders with the obj object properties
            newHtml = html.replace('%id', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type))

            // insert into before the end of the document.querySelector(element) element being declared un the if statements .income__list' or .expenses__list
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)




        },

        // The selectorID parameter will have the itemID inserted into it
        deleteListItem: function (selectorID) {
            var el 

            el = document.getElementById(selectorID)

            el.parentNode.removeChild(el)

        },

        // A function that shares the DOM strings which are the names of the HTML tag fields
        getDomStrings: function () {
            return DOMstrings
        },

        clearField: function () {

            var fields, fieldsArray

            // fields is a list of of two variable the description tag and value 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ' , ' + DOMstrings.inputValue)


            //Store into the fieldsArray the slice method applied in fields which will create a copy of the elements in side the field array
            fieldsArray = Array.prototype.slice.call(fields)


            // sets the current value to empty
            fieldsArray.forEach( function (current, index, array) {
                console.log('Current value: ', current.value)
                current.value = ""
               
            });

            fieldsArray[0].focus()
        },

        //Displays the budget
        displayBudget: function (obj) {
            var type
            obj.budget > 0 ? type = 'inc': type = 'exp'

            // Select the Html tag and make it show the stored data in Data
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type)
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExpense, 'exp')
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalIncome, 'inc')

            // if the percentage is less than 0 which means there is no income only expense then it will show ---
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
            }
        },

        //Displays Percentages
        displayPercentages: function (percentages) {

            //Selecet the tag
            var fields =  document.querySelectorAll(DOMstrings.itemPercentage)
            console.log('fields: ', fields)

           
            // more weird shit happening 
            nodeListForEach(fields, function(current, index) {

                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%'
                } else {
                    current.textContent = '---'
                }
            })       
        },

        displayMonth: function() {
            var now , year, month, months
            now = new Date()
            year = now.getFullYear()
            month = now.getMonth()

            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
            'August', 'September', 'October', 'November', 'December']

            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year

            
        },

        changedType: function () {
            
            var field = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
            )

            nodeListForEach(field, function (cur) {
                cur.classList.toggle('red-focus')
            })

            document.querySelector(DOMstrings.inputButton).classList.toggle('red')

        }
    }

})()

//APP CONTROLLER
var appController = (function () {


    // Sets up the event listeners LOL !!!
    var setUpEventListener = function () {

        // A variable that has the DOMStrings HTML tags
        var DOM = UIController.getDomStrings()

        // Selecting the add button and in the event of being click execute "addCtrlItem"
        document.querySelector(DOM.inputButton).addEventListener('click', addCtrlItem)

        // Using enter also as a trigger for the function "addCtrlItem"
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13) {
                addCtrlItem()
            }
        })   

        // select the whole fucking container 
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem)

        // select the input type either - or + 
        document.querySelector(DOM.inputType).addEventListener('change', UIController.changedType)

    }

    var updateBudget = function () {
        // calculate the budget
        budgetController.calculateBudget()
        
        // Return the budget
        var budget = budgetController.getBudget()

        // Display the Budget
        UIController.displayBudget(budget)
        console.log('budget: ', budget)
    }

    var updatePercentages = function () {

        // Calculate percentages
        budgetController.calculatePercentages()

        // Read the percentages form the budget controller //#endregion
        var percentages = budgetController.getPercentages()
        
        // Update the UI with the new percentages
        UIController.displayPercentages(percentages)        
    }

    // A function that Adds Item
    var addCtrlItem = function () {
        
        var input, newItem

        //Get the field input data, which contains the type (inc or exp), description and value
        input = UIController.getInput();


        // We want only this to happen when the fieldas are not empty so its doesnt return a nonsense thing
        if (input.description !== "" && !isNaN(input.value) && input.value > 0 ){

            //Add a Item to the budget controller, new item is the object that it is created afeter pressing enter With all the information such as type des and val
            newItem = budgetController.addItem(input.type, input.description, input.value)
    
            //Add the Item to the UI 
            UIController.addListItem(newItem, input.type)
    
            //Clear fields
            UIController.clearField()
    
            //Calculate and update budget
            updateBudget()

            //Calculate and update percentages
            updatePercentages()

        }
    }

    var ctrlDeleteItem = function (event) {

        var itemID, splitID, type, ID
        
        // When you click on the icon you need to select the parent tag which is not displyed on the page so we use parent node to select more the parent element of the clicked thing
        // The .id would be the id attribute of the tag <div class="item clearfix" id="income-0"> 
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id


        // if there is itemID
        if (itemID) {

            //inc-1 si the thing we are selecting there is information about the type of the item if it is income or not and the ID that belongs to the object of expense or income 
            splitID = itemID.split('-')
            type = splitID[0]
            ID = parseInt(splitID[1])

            // 1.Delete the item from the data structure
            budgetController.deleteItem(type, ID)

            // 2. Delete the item form the UI 
            UIController.deleteListItem(itemID)

            // 3. Update and show the new budget
            updateBudget()

        }
         
    }


    // A functio that deletes an item 

    return {
        // The INIT function 
        init: function () {
            console.log('The application has started')
            UIController.displayMonth()
            UIController.displayBudget ( {
                budget: 0,
                percentage: -1,
                totalIncome: 0,
                totalExpense: 0
            })
            setUpEventListener()
        }
    }


})()



appController.init()