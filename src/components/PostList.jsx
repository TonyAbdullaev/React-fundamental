import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return (
            <h2>There is no posts yet!</h2>
        )
    }
    return (
        <div>
            <h1>{title}</h1>
            <TransitionGroup>
                {
                    posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            className="post"
                        >
                            <PostItem remove={remove} post={post} />
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    );
};

export default PostList;