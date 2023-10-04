import { configureStore } from '@reduxjs/toolkit';

import { ratingSlice } from './rating-slice';

export const store = configureStore({
    reducer: {
        rating: ratingSlice.reducer
    }
})