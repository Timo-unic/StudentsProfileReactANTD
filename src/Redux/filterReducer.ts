import { createSlice } from "@reduxjs/toolkit";

type lettersNameType = {
    [key: string]: string
}

const filterSlice = createSlice({
    name: 'filter',
    initialState:<lettersNameType> {
        filterBy: '',
    },
    reducers: {
        setFilterBy(state, action) {
            state.filterBy = action.payload;
        },
    },
}) 

// const { actions, reducer } = filterSlice
export const { setFilterBy } = filterSlice.actions;

export default filterSlice.reducer;