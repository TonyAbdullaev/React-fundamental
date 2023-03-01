import React, {useEffect, useState} from "react";
import './styles/App.css'

import Counter from "./components/Counter";
import ControledInput from "./components/ControledInput";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchedPosts} from "./hooks/usePosts";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import PostService from "./API/PostService";
import {getPageArray, getPageCount} from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] =useState({sort: '', query: ''})
    const [isVisibleModal, setVisibleModal] =useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);


    const [fetchPost, isPostLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit))
    })

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (post) => setPosts(posts.filter(pst => pst.id !== post.id));

    useEffect(() => {
        fetchPost(limit, page);
    }, [])

    const changePage = (page) => {
        setPage(page);
        fetchPost(limit, page)
    }

    return (
        <div className="App">
            <Counter />
            <ClassCounter />
            <ControledInput />
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
            {
                postError && <h2>Error is occurred in fetching!</h2>
            }
            {
                isPostLoading
                    ? <Loader />
                    : <PostList
                        remove={removePost}
                        posts={sortedAndSearchedPosts}
                        title={"List of posts"}
                    />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
);
}

export default App;
