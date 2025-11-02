import { configureStore } from '@reduxjs/toolkit'
import addNoteReducer from './addNote/addNoteSlice.js'

export const store = configureStore({
    reducer: {
        addNote: addNoteReducer ,
    },
})