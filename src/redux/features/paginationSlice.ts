import { createSlice } from "@reduxjs/toolkit";

interface TPaginationInitialState{
    stringQuery: string;
    currentPage: number;
    limit: number;
}

const initialState : TPaginationInitialState= {
    stringQuery: "",
    currentPage: 1,
    limit: 10,
}

export const paginationSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setStringQuery(state, action) {
            state.stringQuery = action.payload;
        },

    }
})

export const {setCurrentPage, setStringQuery} = paginationSlice.actions;

export default paginationSlice.reducer;