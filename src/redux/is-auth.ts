import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: boolean = false;

export const isAuth = createSlice({
    name: 'isAuthorized',
    initialState,
    reducers: {
        setIsAuthorized: (state, action: PayloadAction<boolean>) => {
            return state = action.payload
        }
    }
})

export const { setIsAuthorized } = isAuth.actions