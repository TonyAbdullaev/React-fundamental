import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import PostFullInfo from "../components/PostFullInfo";
import CommentItems from "../components/CommentItems";

const PostIdPage = () => {
    const {id} = useParams();
    const [post, setPost] =  useState({});
    const [comments, setComments] =  useState([]);

    const [fetchPostById, isPostLoading, error] = useFetching(async (id) => {
        const {data} = await PostService.getById(id);
        setPost(data);
    })

    const [fetchComments, isCommentLoading, commentError] = useFetching(async (id) => {
        const {data} = await PostService.getPostComment(id);
        setComments(data);
    })

    useEffect(() => {
        fetchPostById(id)
        fetchComments(id)
    }, [])

    return (
        <div>
            {
                isPostLoading
                    ? <Loader />
                    : <PostFullInfo post={post} />
            }
            {
                isCommentLoading
                    ? <Loader />
                    : comments.map(comment => <CommentItems key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default PostIdPage;