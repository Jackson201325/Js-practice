import axios from 'axios'
import { key, proxy } from '../config'

export default class Recipe {
    // ID of the recipes
    constructor(id) {
        this.id = id
    }

    async getRecipe() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title
            this.author = res.data.recipe.publisher
            this.img = res.data.recipe.image_url
            this.url = res.data.recipe.source_url
            this.ingredients = res.data.recipe.ingredients
        } catch (error){
            console.log(error)
        }
    }

    calcTime() {
        // Assuming we need 15 min por each ingredient 
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3 )
        this.time = periods * 15
    }

    calcServings() {
        this.servings = 4
    }

    parseIngredients () {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'pounds', 'cups']
        const shortUnit = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound']
        const units = [...shortUnit, 'kg', 'g'];

        // loops though this.ingredients
        const newIngredients = this.ingredients.map(el => {
            // 1. Uniform Ingredients
            // ingredient changes with each loop
            let ingredient = el.toLowerCase()
            
            //Loops through UnitsLong and store the index in i and the value in unit
            unitsLong.forEach((unit, i) => {
                //console.log('This is unit: ',unit)
                //console.log('2 this is i: ', i)
                //For each unitLong item in the list loop ingredient if there is a word in the ingredient that matches the word in the shotUnit replace it
                ingredient = ingredient.replace(unit, shortUnit[i])
                //console.log('3 This is ingredients: ', ingredient)
                //console.log('------------------------------------------------')
            })

            // 2. Remove parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ')
            
            // 3. Parse ingredients into count, unit and ingredient
            //Split ingredient by space and store it in arrIng
            const arrIng = ingredient.split(' ')
            //console.log('This is arring', arrIng)
            // find the index of arrIng where if any element(el2) of the array(arrIng) inclusdes any element from the shortUnit array
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2))

            let objIng;
            if (unitIndex > -1) {
                //There is unit.
                // Ex. 4 1/4 cups, arrCount is [4, 13] ---> eval('4 + 1/2') ---> 4.5
                // Ex 4 cups arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex)

                let count
                if (arrCount.length > 1) {
                    count = eval(arrCount[0].replace('-', '+'))
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'))
                }

                objIng = {
                    count ,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex+1).join(' ')
                }
                
                //console.log('There is a unit here')
            } else if (parseInt(arrIng[0], 10)) {
                //There is NO unit but there is number

                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                } 
            } else if (unitIndex === -1) {
                //There is no result and no number
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            

            return objIng
        })
        this.ingredients = newIngredients
    }

    updateServings(type) {
        //Serving
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1


        //console.log(newServings)
        //console.log(this.ingredients)
        
        //this.ingredients.forEach(ing => {
        //    console.log(ing)
        //});
        
        
        //Ingredient
        this.ingredients.forEach(ing => {
            ing.count *= (newServings/this.servings)
            //console.log("This is newServings: ", newServings)
            //console.log("This is this.servings", this.servings)
            //console.log('this is Ing.count: ', ing.count)
            //console.log('--------------------------------------')
        })
        

        this.servings = newServings
    }


}

