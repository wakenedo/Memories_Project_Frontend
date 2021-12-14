import React from 'react';
import { useSelector } from 'react-redux';

import useStyles from './styles'
import Post from './Post/index'

const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();

    console.log(posts)
    return (
        <>
            <h1>POSTS COMPONENT</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;