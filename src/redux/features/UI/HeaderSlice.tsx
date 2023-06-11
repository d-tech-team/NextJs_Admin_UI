import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    showSidebar: true
}

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        showSidebar: (state, action) => {
            state.showSidebar = {
                ...state,
                ...action.payload,
            };
        }
    }
})

export const { showSidebar } = headerSlice.actions

export default headerSlice.reducer