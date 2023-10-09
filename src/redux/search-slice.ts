import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Book } from '../types/book';

import data from '../data.json';

const initialState: Book[] = data;

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        filterSearch: (state, action: PayloadAction<string>) => {
            if (!action.payload) {
                return initialState
            } else {
                return state?.filter(({ title }) => title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        }
    }
});

export const { filterSearch } = searchSlice.actions