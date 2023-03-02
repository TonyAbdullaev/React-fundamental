import React, {useEffect, useRef, useState} from "react";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/MyButton/MyButton";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import useObserver from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect/MySelect";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] =useState({sort: '', query: ''})
    const [isVisibleModal, setVisibleModal] =useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);
    const lastElement = useRef();


    const [fetchPost, isPostLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (post) => setPosts(posts.filter(pst => pst.id !== post.id));

    useEffect(() => {
        fetchPost(limit, page);
    }, [page, limit])

    useObserver(lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    })

    const changePage = (page) => {
        setPage(page);
    }

    return (
        <div>
            <MyButton
                onClick={() => setVisibleModal(true)}
            >
                Create post
            </MyButton>
            <MyModal
                visible={isVisibleModal}
                setVisible={setVisibleModal}
            >
                <PostForm create={createPost} visible={isVisibleModal} setVisible={setVisibleModal} />
            </MyModal>
            <hr style={{margin: '15px 0'}} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Number of element in the page"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 15, name: '15'},
                    {value: 20, name: '20'},
                    {value: -1, name: 'Show all'},
                ]}
            />
            {
                postError && <h2>Error is occurred in fetching!</h2>
            }
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"List of posts"}
            />
            <div ref={lastElement} style={{height: 20, background: 'red'}} />
            {
                isPostLoading && <Loader />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Posts;
