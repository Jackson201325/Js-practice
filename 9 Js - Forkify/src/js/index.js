import Search from './models/Search'
import Recipe from './models/Recipe'
import List from './models/List';
import Likes from './models/Likes';
 
import * as searchView from './views/searchView'
import * as recipeView from './views/recipeView'
import * as listView from './views/listView'
import * as likesView from './views/likesView'


import {
    elements,
    renderLoader,
    clearLoader
} from './views/base'


/** Global state of our app 
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipe
 */

const state = {}
window.state = state

/**
 * Search Controller 
 */
const controlSearch = async () => {
    // Get query from view
    const query = searchView.getInput()

    if(query) {
        // 2) New Search object and add to state
        state.search = new Search(query)

        // 3) Prepare UI for result
        searchView.clearInput()
        searchView.clearResult()
        renderLoader(elements.searchRes)

        try {
            //4) Search for Recipe
            await state.search.getResults()
            clearLoader()
    
            // 5) Render results on UI
            //console.log(state.search.result)
            searchView.renderResults(state.search.result)
        } catch (err) {
            console.log(err)
            clearLoader()
        }
    }    
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch()
});


elements.searchResPages.addEventListener('click', e =>{
    const btn = e.target.closest('.btn-inline')
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10)
        searchView.clearResult()
        searchView.renderResults(state.search.result, goToPage)
        console.log(goToPage)
    }
})


/**
 * Recipe Controller 
 */
const controlRecipe = async () => {
    // Get Id from URL
    const id = window.location.hash.replace('#', '')
    console.log(id)

    if(id) {
        //Prepare UI for changes
        recipeView.clearRecipe()
        renderLoader(elements.recipe)

        // Highlight selected search Item
        if (state.sear) {
            searchView.highlightSelected()
        }


        // Create new recipe
        state.recipe = new Recipe(id)

        try {
            //Get recipe data and parse ingredientes
            await state.recipe.getRecipe()
            state.recipe.parseIngredients()
            //Calculate servings and time
            state.recipe.calcTime()
            state.recipe.calcServings()

            //Render recipe
            clearLoader()
            recipeView.renderRecipe(
                state.recipe,
                // Tests if it is liked return a true or false
                state.likes.isLiked(id)
                )

        } catch (error) {
            console.log(error)
        }


    }
}
['hashchange', 'load'].forEach(element => window.addEventListener(element, controlRecipe));

/**
 * List controller
 */
const controlList = () => {
    //Create a new list if there is no ingredient
    if(!state.list) state.list = new List();

    /**
     //Add each element to the list and UI
     state.recipe.ingredients.forEach(element => {
         console.log(element)
         const item = state.list.addItem(element.count, element.unit, element.ingredient)
         console.log('This is item: ', item)
         listView.renderItem(item)
     });
 }
     * 
     */
    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid
    
    // Handle the delete
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        //Delete from state
        state.list.deleteItem(id)
        
        //Delete from UI
        listView.deleteItem(id)
        
        // Update the count 
    } else if (e.target.matches('.shopping__count-value')) {
        const val = parseFloat(e.target.value, 10)
        state.list.updateCount(id, val)
    }
})

/**
 * Like Controller 
 */
//TESTING
state.likes = new Likes()
likesView.toggleLikeMenu(state.likes.getNumLikes())
const controlLike = () => {
    if(!state.likes) state.likes = new Likes()
    const currentID = state.recipe.id

    // Use rhas NOT yer lliked the current recipe
    if (!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        )
        // console.log('THis is newLike: ', newLike)
        // Toggle the like button
        likesView.toggleLikeBtn(true)

        // Add like to UI list
        likesView.renderLike(newLike)
        console.log(state.likes)

    
    // User HAS liked current recipe
    } else {
        // Remove like to the state
        state.likes.deleteLike(currentID)
        // Toggle the like button
        likesView.toggleLikeBtn(false)
        // Remove like to UI list
        console.log(state.likes)


    }
    likesView.toggleLikeMenu(state.likes.getNumLikes())

}



// handeling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec')
            recipeView.updateServingsIngredients(state.recipe)
        } 
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked 
        state.recipe.updateServings('inc')
        recipeView.updateServingsIngredients(state.recipe)

    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        //console.log('HEllo')
        controlList()
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        //like controller
        controlLike()
    }
    //console.log(state.recipe)
})









