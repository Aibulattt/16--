import React from 'react';
import { connect } from 'react-redux';

import ListComments from '../components/comments-item';
import AddComment from '../components/add-comments';

import { addComment, deleteComment, addLike, addDislike } from '../actions/index';

 let App = (props) => {
     const {
        commentsList, addComment, deleteComment
     } = props;
    return (
        <div>
            <ListComments commentsList={commentsList} deleteComment={deleteComment} addLike={addLike} addDislike={addDislike} />
            <AddComment addComment={addComment} commentsList={commentsList} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        commentsList: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (author, text, date, id) => dispatch(addComment(author, text, date, id)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        addLike: (id, counterLikes) => dispatch(addLike(id, counterLikes)),
        addDislike: () => dispatch(addDislike())
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;
