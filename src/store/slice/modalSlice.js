import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActive: false,
}

export const modalSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.isActive = action.payload
        }
    },
})

export const { setModal } = modalSlice.actions

export default modalSlice.reducer