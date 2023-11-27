import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ILoaderState {
    isLoad: boolean
    message: string
}

const initialState: ILoaderState = {
    isLoad: false,
    message: 'Đang tải...'
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        showProgressLoading: (state, action: PayloadAction<string>) => {
            state.isLoad = true
            state.message = action.payload
        },
        hideProgressLoading: (state) => {
            state.isLoad = false
            state.message = ''
        }
    }
})

export const { showProgressLoading, hideProgressLoading } = loadingSlice.actions
export default loadingSlice.reducer
