import {
    elements
} from './base'

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResult = () => {
    elements.searchResList.innerHTML = ''
    elements.searchResPages.innerHTML = ''
}

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'))
    resultsArr.forEach(el =>{
        el.classList.remove('results__link--active')
    })
    document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active')
}



const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = []
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length
        }, 0)
        return `${newTitle.join(' ')} ....`

    }
    return title
}


const renderRecipe = recipe => {
    const markUp = `
        <li>
            <a class="results__link results__link--active" href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>`
    elements.searchResList.insertAdjacentHTML('beforeend', markUp)
}

//type 
const createButton = (page, type) => `
<button class = "btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1: page + 1}>
    <span>Page ${type === 'prev' ? page - 1: page + 1}</span>
    <svg class = "search__icon" >
        <use href = "img/icons.svg#icon-triangle-${type === 'prev' ? 'left': 'right'}"></use>
    </svg>
</button> 
`


const renderButtons = (page, numResults, resPerPage) => {
    const pages = numResults / resPerPage
    let button
    if (page === 1 && pages > 1) {
        //only button to go next
        button = createButton(page, 'next')
    } else if (page < pages) {
        // both buttons
        button = [createButton(page, 'prev'), createButton(page, 'next')]
    } else if (page === pages && pages > 1) {
        // only button to go to prev page 
        button = createButton(page, 'prev')
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button)
}


export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render result of current page

    const start = (page - 1) * resPerPage
    const end = (page * resPerPage)

    //searchView.renderResults(state.search.result = recipes in an array of 30 objects)
    recipes.slice(start, end).forEach(renderRecipe);

    //render pagination 
    renderButtons(page, recipes.length, resPerPage)
}