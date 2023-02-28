import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create, setVisible}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
        setVisible(false)
    };

    return (
        <>
            <h2>Create post!</h2>
            <form action="">
                <MyInput
                    value={post.title}
                    onChange={(event) => setPost({...post, title: event.target.value})}
                    type="text"
                    placeholder="post name..."
                />
                <MyInput
                    value={post.body}
                    onChange={(event) => setPost({...post, body: event.target.value })}
                    type="text"
                    placeholder="description..."
                />
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <MyButton onClick={addNewPost}>Create new post</MyButton>
                    <MyButton onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                    }}>Close</MyButton>
                </div>
            </form>
        </>
    );
};

export default PostForm;