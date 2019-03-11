import uniqid from 'uniqid'

export default class List {
    constructor() {
        this.items = []
    }

    addItem (count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item)
        return item
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id)
        // [2, 4, 8] splice (1, 2) starts from 1 and ends at 2 but does include the last number => returns [4, 8]. The original array is [2]. transform the array
        // [2, 4, 8] slice (1, 2) starts from 1 and ends at 2 but does not include the last number => returns [4] The original array is  [2, 4, 8], does not transform the array. 
        return this.items.splice(index, 1)
    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount
    }
}