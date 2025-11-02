import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const addNoteSlice = createSlice({
    name: 'isAddNote',
    initialState,
    reducers: {
        showModal: (state) => {
            state.value = true
        },
        hideModal: (state) => {
            state.value = false
        },
    },
})

export const { showModal, hideModal } = addNoteSlice.actions

export default addNoteSlice.reducer