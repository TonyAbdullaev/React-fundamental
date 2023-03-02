import React from 'react';
import MyButton from "./UI/MyButton/MyButton";
import {useNavigate} from 'react-router-dom';
const PostItem = ({post, remove}) => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id} {post.title}</strong>
                <div>
                    {post.title} - {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`${post.id}`)}>Open</MyButton>
                <MyButton onClick={() => remove(post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;