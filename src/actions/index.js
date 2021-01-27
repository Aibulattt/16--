// const uuid =()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,c=>(c^crypto.getRandomValues(new Uint8Array(1))[0]&15 >> c/4).toString(16));

export const addComment = (author, text) => {
    return{
        type: 'ADD_COMMENTS',
        author: author,
        text: text,
        counterLikes: 0,
        counterDislikes: 0,
    }
}

export const deleteComment = (id) => {
    return{
        type: 'DELETE_COMMENT',
        id
    
    }
}

export const addLike = (id,counterLikes) => {
    return {
        type: 'ADD_LIKE',
        id: id,
        counterLikes: counterLikes
    }
}

export const addDislike = (id, counterDislikes) => {
    return {
        type: 'ADD_DISLIKE',
        id: id,
        counterDislikes: counterDislikes
    }
}