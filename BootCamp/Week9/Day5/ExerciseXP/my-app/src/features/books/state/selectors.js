import { createSelector } from '@reduxjs/toolkit';
import { state } from './slice';

export const selectBooks = createSelector([state], (booksState) => booksState.books);

export const selectHorrorBooks = createSelector([state], (booksState) => booksState.books.filter((book) => book.genre === 'horror')); 

export const selectFantasyBooks = createSelector([state], (booksState) => booksState.books.filter((book) => book.genre === 'fantasy')); 

export const selectScienceFictionBooks = createSelector([state], (booksState) => booksState.books.filter((book) => book.genre === 'science-fiction'));

