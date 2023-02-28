import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div style={{display: "flex"}}>
            <MyInput
                value={filter.query}
                placeholder="Search"
                onChange={(event) => setFilter({...filter, query: event.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sort by"
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;