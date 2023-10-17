import { configureStore } from '@reduxjs/toolkit';

import { ratingSlice } from './rating-slice';
import { searchSlice } from './search-slice';
import { isAuth } from './is-auth';

export const store = configureStore({
    reducer: {
        rating: ratingSlice.reducer,
        search: searchSlice.reducer,
        isAuth: isAuth.reducer
    }
})