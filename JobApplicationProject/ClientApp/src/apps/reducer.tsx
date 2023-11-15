import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    id: ''
}

const globalReducer = createReducer(initialState, (builder) => {})

export default globalReducer
