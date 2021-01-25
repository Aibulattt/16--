let nextId = 2;
let like = 0;

export const addComment = (author, text) => {
    return{
        type: 'ADD_COMMENTS',
        author: author,
        text: text,
        date: new Date().toLocaleString(),
        counterLikes: 0,
        counterDislikes: 0,
        id: nextId++
    }
}

export const deleteComment = (id) => {
    return{
        type: 'DELETE_COMMENT',
        id
    
    }
}

export const addLike = (counterLikes) => {
    console.log('like')
    return {
        type: 'ADD_LIKE',
        counterLikes: counterLikes
    }
}

export const addDislike = () => {
    return {
        type: 'ADD_DISLIKE',

    }
}