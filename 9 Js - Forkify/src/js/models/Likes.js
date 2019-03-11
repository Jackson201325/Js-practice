export default class Likes {
    constructor() {
        this.likes = []
    }

    addLike(id, title, author, img) {
        const like = { id, title, author, img}
        this.likes.push(like)
        return like
    }

    deleteLike(id) {
        const index = this.likes.findIndex(el => el.id === id)
        // [2, 4, 8] splice (1, 2) starts from 1 and ends at 2 but does include the last number => returns [4, 8]. The original array is [2]. transform the array
        // [2, 4, 8] slice (1, 2) starts from 1 and ends at 2 but does not include the last number => returns [4] The original array is  [2, 4, 8], does not transform the array. 
        return this.likes.splice(index, 1)
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1
    }

    getNumLikes() {
        return this.likes.length
    }
}