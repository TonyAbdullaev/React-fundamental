import React from 'react';

const CommentItems = ({comment}) => {
    return (
        <div className="comment__wrapper">
            <h4 className="comment__sender">
                {comment.email}
            </h4>
            <div className="comment__text">
                {comment.body}
            </div>
        </div>
    );
};

export default CommentItems;