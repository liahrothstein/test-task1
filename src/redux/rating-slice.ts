import { createSlice } from '@reduxjs/toolkit';

import { Book } from '../types/book';

import data from '../data.json';

const initialState: Book[] = data;

export const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        ratingOn: (state) => {
            state.sort((a, b) => ((a.rating !== null && b.rating !== null) ? ((a.rating > b.rating) ? -1 :
                (a.rating < b.rating) ? 1 :
                    (a.rating === b.rating) ? 0 : 1) : 1))
        },
        ratingOff: (state) => {
            state.sort((a, b) => ((a.rating !== null && b.rating !== null) ? ((a.rating > b.rating) ? 1 :
                (a.rating < b.rating) ? -1 :
                    (a.rating === b.rating) ? 0 : 1) : 1))
        }
    }
});

export const { ratingOn, ratingOff } = ratingSlice.actions;