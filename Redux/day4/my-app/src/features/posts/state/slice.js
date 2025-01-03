import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
    posts: [],
    status: '',
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const res = await fetch(POST_URL);
    const data = await res.json();
    return data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addReaction: (state, action) => {
            const { id, name } = action.payload;
            const post = state.posts.find(post => post.id === id)
            if(post){
                post.reactions[name]++;
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'success';
            const loadedPosts = action.payload.map(post => {
                post.reactions = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                };
                return post;
            });
            state.posts = loadedPosts;            
        })
        .addCase(fetchPosts.rejected, (state) => {
            state.status = 'failed';
        })
    }
});

export const state = (state) => state.postsReducer;
export const posts = (state) => state.postsReducer.posts;


export const {addReaction} = postsSlice.actions;
export default postsSlice.reducer;