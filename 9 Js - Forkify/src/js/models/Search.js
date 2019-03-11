import axios from 'axios'
import {
    key,
    proxy
} from '../config'


export default class Search {
    constructor(query) {
        //The food recipe we want to search for
        this.query = query

    }
    async getResults() {
        try {
            //API call stored in res constant
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)

            // res is a json file so we can set what properties we want 
            this.result = res.data.recipes
                
            //console.log(this.result)        
        } catch (error) {
            alert(error)
        }
    }
}

