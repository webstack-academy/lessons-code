import { createSlice } from '@reduxjs/toolkit'

export const contatore = createSlice({
    name: 'contatore',
    initialState: {
        value: 0
    },
    reducers: {
        incrementa: (state) => {
            state.value += 1
        }
    }
})

export const {incrementa} = contatore.actions;
export default contatore.reducer;