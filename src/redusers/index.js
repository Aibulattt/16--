const comment = (state=[], action) => {

    switch(action.type) {
        case 'ADD_COMMENTS':
            return[
                ...state,
                {author: action.author, text: action.text, date: new Date().toLocaleString(), id: action.id, counterLikes: action.counterLikes, counterDislikes: action.counterDislikes}
            ]

        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id)

        case 'ADD_LIKE':
            return state.forEach((comment) => {
                if(comment.id === action.id) {
                    comment.counterLikes = comment.counterLikes + 1;
                }
            })

        case 'ADD_DISLIKE':
            return [
                {author: action.author, text: action.text, id:action.id, counterLike: +1, counterDislikes: +1}
            ]

        default:
                return state;
    }
}


export default comment;