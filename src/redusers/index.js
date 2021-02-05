const comment = (state=[], action) => {

    switch(action.type) {
        case 'ADD_COMMENTS':
            return[
                ...state,
                {author: action.author, text: action.text, date: action.date, id: action.id}
            ]

        case 'DELETE_COMMENT':
            return state.filter(comment => comment.id !== action.id)


        default:
                return state;
    }
}


export default comment;