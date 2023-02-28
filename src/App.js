import React, {useMemo, useState} from "react";
import './styles/App.css'

import Counter from "./components/Counter";
import ControledInput from "./components/ControledInput";
import ClassCounter from "./components/ClassCounter";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'it isn\'t strongly typed language'},
        {id: 2, title: 'Java', body: 'it is strongly typed language'},
        {id: 3, title: 'C#', body: 'it is strongly typed language'},
    ]);
    const [filter, setFilter] =useState({sort: '', query: ''})
    const [isVisibleModal, setVisibleModal] =useState(false)

    const sortedPosts = useMemo(() => {
        console.log("Body of useMemo")
        if(filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query))
    }, [sortedPosts, filter.query])

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (post) => setPosts(posts.filter(pst => pst.id !== post.id));

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
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title={"List of posts"}
            />
        </div>
);
}

export default App;
