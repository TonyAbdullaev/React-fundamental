import React from 'react';
import InfoField from "./UI/InfoField/InfoField";

const PostFullInfo = ({post}) => {
    return (
        <>
            <h2>Post № {post.id}</h2>
            <InfoField title="Title" description={post.title} />
            <InfoField title="Description" description={post.body} />
            <h2>Comments</h2>
        </>
    );
};

export default PostFullInfo;