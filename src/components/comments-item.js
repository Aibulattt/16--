import React from 'react';

 const ListComments = (props) => {
     const {commentsList, deleteComment, addLike, addDislike} = props;
    return (
        <div>
            <h1>Комментарии</h1>
            <ul className='list-comments'>   
                { commentsList.map((comment) => {
                return(
                    <li
                    key={comment.id}
                    >
                        <div className='comment-info'>
                            <span className='author-comment'>{comment.author}</span>
                            <span className='date-comment'>{comment.date}</span>
                        </div>
                        <div className='comment'>
                            <span className='text-comment'>{comment.text}</span>
                            <button className='btn-delete'
                            onClick={() => {
                                deleteComment(comment.id);
                                }
                            }
                            >Удалить
                            </button>
                            <button
                                className='like-btn'
                                onClick={() => {
                                    addLike(comment.id, comment.counterLikes);
                                }}
                            >
                                {comment.counterLikes}
                            </button>
                            <button
                                className='dislike-btn'
                                onClick={() => {
                                    addDislike();
                                }}
                            >
                                {comment.counterDislikes}
                            </button>
                        </div>
                    </li>
                );
            })
        }  
            </ul>
        </div>
    );
}

export default ListComments;