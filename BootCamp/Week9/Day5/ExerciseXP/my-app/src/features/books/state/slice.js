import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        {
            id: 1,
            title: 'It',
            author: 'Steven King',
            genre: 'horror'
        },{
            id: 2,
            title: 'Frankenstein',
            author: 'Mary Shelley',
            genre: 'horror'
        },{
            id: 3,
            title: 'Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre: 'fantasy'
        },{
            id: 4,
            title: 'Hobit',
            author: 'J.R.R. Tolkien',
            genre: 'fantasy'
        },{
            id: 5,
            title: '20,000 Leagues under the Sea',
            author: 'Jules Verne',
            genre: 'science-fiction'
        },{
            id: 6,
            title: 'The Mysterious Island',
            author: 'Jules Verne',
            genre: 'science-fiction'
        }
    ],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
});

export const state = (state) => state.booksReducer;

// export const {} = booksSlice.actions;
export default booksSlice.reducer;