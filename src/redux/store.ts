import { configureStore } from '@reduxjs/toolkit';

import { ratingSlice } from './rating-slice';
import { searchSlice } from './search-slice';

export const store = configureStore({
    reducer: {
        rating: ratingSlice.reducer,
        search: searchSlice.reducer
    }
})