import { createSlice } from "@reduxjs/toolkit";

interface TPaginationInitialState{
    stringQuery: string;
    currentPage: number;
    limit: number;
    sort: string;
}

const initialState : TPaginationInitialState= {
    stringQuery: "",
    currentPage: 1,
    limit: 10,
    sort: "id",
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
        setOrder(state, action) {
            state.sort = action.payload;
        }
    }
})

export const {setCurrentPage, setStringQuery, setOrder} = paginationSlice.actions;

export default paginationSlice.reducer;