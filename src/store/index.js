import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
}

const counterLogic = createSlice({
    name: 'anything',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        }
    }
})

const store = configureStore({
    reducer: {counter: counterLogic.reducer}
})

export const actions = counterLogic.actions

export default store

