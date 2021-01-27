const comment = (state=[], action) => {
const uuid =()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

    switch(action.type) {
        case 'ADD_COMMENTS':
            return[
                ...state,
                {author: action.author, text: action.text, date: new Date().toLocaleString(), id: uuid(), counterLikes: action.counterLikes, counterDislikes: action.counterDislikes}
            ]

        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id)

        case 'ADD_LIKE':
            return state.map((comment) => {
                if(comment.id === action.id) {
                    comment.counterLikes = comment.counterLikes + 1;
                }
            })

        case 'ADD_DISLIKE':
            return state.map((comment) => {
                if(comment.id === action.id) {
                    comment.counterDislikes = comment.counterDislikes + 1;
                }
            })

        default:
                return state;
    }
}


export default comment;